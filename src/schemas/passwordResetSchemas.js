import Joi from 'joi';

const requestPasswordResetSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Adresse email invalide',
    'any.required': 'L\'adresse email est requise'
  }),
});

const resetPasswordSchema = Joi.object({
  token: Joi.string().required().messages({
    'any.required': 'Le jeton de réinitialisation est requis'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Adresse email invalide',
    'any.required': 'L\'adresse email est requise'
  }),
  newPassword: Joi.string()
    .min(4) // TODO: A augmenter pour la mise en production
    .required()
    .pattern(/[a-z]/)
    .pattern(/[A-Z]/)
    .pattern(/[0-9]/)
    .pattern(/[!@#$%^&*(),.?":{}|<>]/)
    .messages({
      'string.min': 'Le mot de passe doit contenir au moins {#limit} caractères',
      'any.required': 'Le mot de passe est requis',
      'string.pattern.base': 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
    }),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref('newPassword'))
    .required()
    .messages({
      'any.required': 'La confirmation du mot de passe est requise',
      'any.only': 'La confirmation du mot de passe ne correspond pas au nouveau mot de passe'
    }),
});

export { requestPasswordResetSchema, resetPasswordSchema };