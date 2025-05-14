import Joi from 'joi';

const createUserSchema = Joi.object({
  pseudo: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Le nom doit contenir au moins {#limit} caractères',
    'string.max': 'Le nom ne peut pas dépasser {#limit} caractères',
    'any.required': 'Le nom est requis'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Adresse email invalide',
    'any.required': 'L\'adresse email est requise'
  }),
  password: Joi.string()
  .min(4)
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
  confirmPassword: Joi.string()
  .min(4)
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
  avatar_url: Joi.string().trim().regex(/^avatar-\d+-\d+\.(jpg|jpeg|png|gif)$/i).optional().allow('').messages({
    'string.base': 'L\'avatar doit être une chaîne de caractères.',
    'string.regex.base': 'Le nom de fichier de l\'avatar doit être un nom de fichier image valide (jpg, jpeg, png, gif).',
  }),
  role: Joi.string().valid("user", "admin").default('user')
  
});

const updateUserSchema = Joi.object({
    pseudo: Joi.string().min(2).max(50).messages({
        'string.min': 'Le nom doit contenir au moins {#limit} caractères',
        'string.max': 'Le nom ne peut pas dépasser {#limit} caractères',
      }),
      email: Joi.string().email().messages({
        'string.email': 'Adresse email invalide',
      }),
      password: Joi.string()
      .min(4)
      .pattern(/[a-z]/)
      .pattern(/[A-Z]/)
      .pattern(/[0-9]/)
      .pattern(/[!@#$%^&*(),.?":{}|<>]/)
      .messages({
        'string.min': 'Le mot de passe doit contenir au moins {#limit} caractères',
        'string.pattern.base': 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
      }),
      newPassword: Joi.string()
      .min(4)
      .pattern(/[a-z]/)
      .pattern(/[A-Z]/)
      .pattern(/[0-9]/)
      .pattern(/[!@#$%^&*(),.?":{}|<>]/)
      .messages({
        'string.min': 'Le mot de passe doit contenir au moins {#limit} caractères',
        'string.pattern.base': 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
      }),
      confirmNewPassword: Joi.string()
      .min(4)
      .pattern(/[a-z]/)
      .pattern(/[A-Z]/)
      .pattern(/[0-9]/)
      .pattern(/[!@#$%^&*(),.?":{}|<>]/)
      .messages({
        'string.min': 'Le mot de passe doit contenir au moins {#limit} caractères',
        'string.pattern.base': 'Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial'
      }),
      avatar_url: Joi.string().trim().regex(/^avatar-\d+-\d+\.(jpg|jpeg|png|gif)$/i).optional().allow('').messages({
        'string.base': 'L\'avatar doit être une chaîne de caractères.',
        'string.regex.base': 'Le nom de fichier de l\'avatar doit être un nom de fichier image valide (jpg, jpeg, png, gif).',
      }),

}).min(1).messages({
  'object.min': 'Au moins un champ doit être fourni pour la mise à jour'
});

export { createUserSchema, updateUserSchema }