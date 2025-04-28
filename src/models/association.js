import { sequelize } from './connection.js';
import { User } from './User.js';
import { Challenge } from './Challenge.js';
import { Category } from './Category.js';
import { Difficulty } from './Difficulty.js';

Category.hasMany(Challenge, {
  as: 'challenges_has_category',
  foreignKey: 'category_id'
})

Challenge.belongsTo(Category, {
  as: 'category',
  foreignKey: "category_id" 
})

Difficulty.hasMany(Challenge, {
  as: 'challenges_has_difficulty',
  foreignKey: 'difficulty_id'
})

Challenge.belongsTo(Difficulty, {
  as: 'difficulty',
  foreignKey: "difficulty_id"
})

User.hasMany(Challenge, {
  as: 'challenges_has_user',
  foreignKey: 'user_id'
})

Challenge.belongsTo(User, {
  as: 'user',
  foreignKey: "user_id"
})

User.belongsToMany(Challenge, {
  as: 'challenges',
  through: "submission",
  foreignKey: "user_id",
  otherKey: "challenge_id",
  attributes: ['video_url']
});

Challenge.belongsToMany(User, {
  as: "users",
  through: "submission",
  foreignKey: "challenge_id",
  otherKey: "user_id",
  attributes: ['video_url']
});

export { User, Challenge, Category, Difficulty, sequelize }




