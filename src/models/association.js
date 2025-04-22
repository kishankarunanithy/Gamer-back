import { sequelize } from './connection.js';
import { Category } from './Category.js';
import { Challenge } from './Challenge.js';
import { Difficulty } from './Difficulty.js';

Category.hasmany(Challenge, {
  as: 'challenges',
  foreignKey: 'category_id'
})

Challenge.belongsTo(Category, {
  as: 'categories',
  foreignKey: "category_id" 
})

Difficulty.hasmany(Challenge, {
  as: 'challenges',
  foreignKey: 'difficulty_id'
})

Challenge.belongsTo(Difficulty, {
  as: 'difficulties',
  foreignKey: "difficulty_id"
})

User.hasmany(Challenge, {
  as: 'challenges',
  foreignKey: 'user_id'
})

Challenge.belongsTo(User, {
  as: 'users',
  foreignKey: "user_id"
})

User.belongsToMany(Challenge, {
  as: 'challenges',
  through: "submission",
  foreignKey: "user_id",
  otherKey: "tag_id"
});

Challenge.belongsToMany(User, {
  as: "users",
  through: "submission",
  foreignKey: "challenge_id"
});

export { User, Challenge, Category, Difficulty, sequelize }




