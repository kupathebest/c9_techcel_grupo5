'use strict';

const users = require('../../data/usuarios.json')
const avatar = []

let algo = {
  file : "avatar_default.png",
  createdAt: new Date,
  updatedAt: new Date
}
avatar.push(algo)

users.forEach(user => {
  let item = {

    file: user.avatar,
    createdAt: new Date,
    updatedAt: new Date
  }
  avatar.push(item)
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Avatars', avatar, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Avatars', avatar, {});
  }
};
