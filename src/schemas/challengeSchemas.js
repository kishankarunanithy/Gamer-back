import Joi from 'joi';

const createChallengeSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Le nom doit contenir au moins {#limit} caractères',
    'string.max': 'Le nom ne peut pas dépasser {#limit} caractères',
    'any.required': 'Le nom est requis'
  }),
  description: Joi.string().min(2).max(250).required().messages({
    'string.min': 'La description doit contenir au moins {#limit} caractères',
    'string.max': 'La description ne peut pas dépasser {#limit} caractères',
    'any.required': 'La description est requise'
  }),

  video_url: Joi.string().uri({scheme: ['http', 'https']}).required().messages({
    'string.uri': 'URL de vidéo invalide. Veuillez fournir une URL valide commençant par http:// ou https://',
    'any.required': 'L\'URL de la vidéo est requise'
  }),

  user_id: Joi.number().integer().greater(0).messages({
    "number.base": "L'identifiant de l\'utilisateur doit être un nombre",
    "number.integer": "L'identifiant de l\'utilisateur doit être un nombre entier",
    "number.greater": "L'identifiant de l\'utilisateur être supérieur à {#limit}",
  }),

  category_id: Joi.number().integer().greater(0).messages({
    "number.base": "L'identifiant de la catégorie doit être un nombre",
    "number.integer": "L'identifiant de la catégorie doit être un nombre entier",
    "number.greater": "L'identifiant de la catégorie être supérieur à {#limit}",
  }),

  difficulty_id: Joi.number().integer().greater(0).messages({
    "number.base": "L'identifiant de la difficulté doit être un nombre",
    "number.integer": "L'identifiant de la difficulté doit être un nombre entier",
    "number.greater": "L'identifiant de la difficulté doit être supérieur à {#limit}",
  }),
});

const updateChallengeSchema = Joi.object({
    name: Joi.string().min(2).max(50).messages({
        'string.min': 'Le nom doit contenir au moins {#limit} caractères',
        'string.max': 'Le nom ne peut pas dépasser {#limit} caractères',
        'any.required': 'Le nom est requis'
      }),
      description: Joi.string().min(2).max(250).messages({
        'string.min': 'La description doit contenir au moins {#limit} caractères',
        'string.max': 'La description ne peut pas dépasser {#limit} caractères',
        'any.required': 'La description est requise'
      }),
    
      video_url: Joi.string().uri({scheme: ['http', 'https']}).messages({
        'string.uri': 'URL de vidéo invalide. Veuillez fournir une URL valide commençant par http:// ou https://',
        'any.required': 'L\'URL de la vidéo est requise'
      }),

}).min(1).messages({
  'object.min': 'Au moins un champ doit être fourni pour la mise à jour'
});

export { createChallengeSchema, updateChallengeSchema }
