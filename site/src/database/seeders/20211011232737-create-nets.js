'use strict';

const products = require('../../data/celulares.json')
const nets = []

products.forEach(celular => {
  let item = {
    twog: celular.dosg,
    threeg: celular.tresg,
    fourg: celular.cuatrog,
    fiveg: celular.cincog,
    gprs: celular.gprs,
    sim: celular.sim,
    createdAt: new Date,
    updatedAt : new Date
  }
  nets.push(item)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Nets', nets , {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Nets', null, {});

  }
};
