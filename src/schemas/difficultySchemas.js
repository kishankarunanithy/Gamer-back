import Joi from 'joi';

const createDifficultySchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Le nom doit contenir au moins {#limit} caractères',
    'string.max': 'Le nom ne peut pas dépasser {#limit} caractères',
    'any.required': 'Le nom est requis'
  }),
  color: Joi.string().regex(/^#([0-9a-fA-F]{3}){1,2}$/).messages({
    "string.pattern.base": "La couleur doit être un code hexadécimal valide",
  }),
});

const updateDifficultySchema = Joi.object({
  name: Joi.string().min(2).max(50).messages({
    'string.min': 'Le nom doit contenir au moins {#limit} caractères',
    'string.max': 'Le nom ne peut pas dépasser {#limit} caractères'
  }),
  color: Joi.string().regex(/^#([0-9a-fA-F]{3}){1,2}$/).messages({
    "string.pattern.base": "La couleur doit être un code hexadécimal valide",
  }),

}).min(1).messages({
  'object.min': 'Au moins un champ doit être fourni pour la mise à jour'
});

export { createDifficultySchema, updateDifficultySchema }