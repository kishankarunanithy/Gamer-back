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
  avatar: Joi.string().uri({scheme: ['http', 'https']}).required().messages({
      'string.uri': 'URL de l\'avatar invalide. Veuillez fournir une URL valide commençant par http:// ou https://',
      'any.required': 'L\'URL de l\'avatar est requise'
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
      avatar: Joi.string().uri({scheme: ['http', 'https']}).messages({
          'string.uri': 'URL de l\'avatar invalide. Veuillez fournir une URL valide commençant par http:// ou https://',
        }),

}).min(1).messages({
  'object.min': 'Au moins un champ doit être fourni pour la mise à jour'
});

export { createUserSchema, updateUserSchema }