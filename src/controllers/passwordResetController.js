import { User, PasswordReset } from "../models/association.js";
import crypto from "crypto";
import argon2 from "argon2";
import { Op} from "sequelize";
import sendEmail from "..//utils/mailer.js";
import { AppError, ValidationError } from "../utils/error.js";

const passwordResetController = {

  async requestPasswordReset(req, res) {
    const { email } = req.body;

    if (!email) {
      throw new ValidationError("L'email est obligatoire.");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      //* Pour des raisons de sécurité, on ne divulgue pas si l'email existe.
      //* On répond pas un succès.
      return res.status(200).json({
        message: "Si un compte est associé à cette email, un lien de réinitialisation a été envoyé.",
      });
    }

    //* On supprime les anciens tokens de réinitialisation de l'utilisateur
    await PasswordReset.destroy({
      where: {
        userId: user.id,
        used: false,
        expireAt: { [Op.gt]: new Date() }
      },
    });

    //* On génére un token unique et sa durée. (ici 1 heure)
    const token = crypto.randomBytes(32).toString("hex");
    const expireAt = new Date(Date.now() + 3600000); //*? 1h = 3600 secondes soit en milisecondes 3600s x 1000 = 3600000ms

    //* On enregistre le token dans la table PasswordReset
    await PasswordReset.create({
      userId: user.id,
      token,
      expireAt,
    });

    //* Ici on créer le lien de réinitialisation
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}&email=${email}`;

    //* On envoi l'email à l'utilisateur
    await sendEmail({
      to: user.email,
      subject: "Réinisialisation de votre mot de passe",
      html: `
        <h1>Réinitialisation de mot de passe</h1>
        <p>Bonjour ${user.pseudo},</p>
        <p>Vous avez demandé une réinitialisation de votre mot de passe. Veuillez cliquer sur le lien ci-dessous pour le réinitialiser :</p>
        <a href="${resetLink}">Réinitialiser mon mote de passe</a>
        <p>Ce lien est valide pendant 1 heure.</p>
        <p>Si vous n'avez pas demandé cette réinitiallisation, veuillez ignorer cet email.</p>
        <p>Cordialement</p>
        <p>L'équipe Gamer Challenges</p>  
      `,
    });

    res.status(200).json({
      message: "Si un compte est associé à cette email, un lien de réinitialisation à été envoyé.",
    });
  },

  async resetPassword(req, res) {
    const { token, email, newPassword } = req.body;
    
    if (!token || !email || !newPassword) {
      throw new ValidationError("Tous les champs sont obligatoires.");
    }

    const passwordReset = await PasswordReset.findOne({
      where: {
        token,
        used: false,
        expireAt: { [Op.gt]: new Date() }, //* On s'assure que le token est toujours valide.
      },
      include: [{
        model: User,
        where: { email }
      }]
    });

    if (!passwordReset || !passwordReset.User) {
      throw new AppError("Le lien de réinitialisation est invalide ou expiré.", 400);
    }

    //* Si tout est bon on met à jours le mot de passe
    const user = passwordReset.User;
    user.password = newPassword;
    await user.save();

    //* On marque donc le token comme utilisé
    passwordReset.used = true;
    await passwordReset.save();

    res.status(200).json({message: "Votre mot de passe a été réinitialisé avec succès."})
  },
};

export { passwordResetController };