'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('Characters');

    if (tableInfo.name) {
      await queryInterface.removeColumn('Characters', 'name');
    }
    if (tableInfo.chracteristicsAndAbilities) {
      await queryInterface.removeColumn('Characters', 'chracteristicsAndAbilities');
    }
    if (tableInfo.equipmentAndCombat) {
      await queryInterface.removeColumn('Characters', 'equipmentAndCombat');
    }
    if (tableInfo.chracteristicsandabilities) {
      await queryInterface.removeColumn('Characters', 'chracteristicsandabilities');
    }
    if (!tableInfo.entityId) {
      await queryInterface.addColumn('Characters', 'entityId', {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true
      });
    }
    if (!tableInfo.characterName) {
      await queryInterface.addColumn('Characters', 'characterName', {
        type: Sequelize.STRING,
        allowNull: false
      });
    }
    if (!tableInfo.age) {
      await queryInterface.addColumn('Characters', 'age', {
        type: Sequelize.INTEGER,
        defaultValue: 25,
        allowNull: true
      });
    }
    if (!tableInfo.description) {
      await queryInterface.addColumn('Characters', 'description', {
        type: Sequelize.TEXT,
        allowNull: true
      });
    }
    if (!tableInfo.house) {
      await queryInterface.addColumn('Characters', 'house', {
        type: Sequelize.ENUM('Bonisagus', 'Tremere', 'Guernicus', 'Mercere', 'Criamon', 'Ex Miscellenia', 'Verditius', 'Bjorner', 'Merenita', 'Tytalus', 'Jerbiton', 'Flambeau'),
        allowNull: true
      });
    }
    if (!tableInfo.virtues) {
      await queryInterface.addColumn('Characters', 'virtues', {
        type: Sequelize.JSON
      });
    }
    if (!tableInfo.flaws) {
      await queryInterface.addColumn('Characters', 'flaws', {
        type: Sequelize.JSON
      });
    }
    if (!tableInfo.characteristics) {
      await queryInterface.addColumn('Characters', 'characteristics', {
        type: Sequelize.JSON
      });
    }
    if (!tableInfo.abilities) {
      await queryInterface.addColumn('Characters', 'abilities', {
        type: Sequelize.JSON
      });
    }
    if (!tableInfo.arts) {
      await queryInterface.addColumn('Characters', 'arts', {
        type: Sequelize.JSON
      });
    }
    if (!tableInfo.spells) {
      await queryInterface.addColumn('Characters', 'spells', {
        type: Sequelize.JSON
      });
    }
    if (!tableInfo.equipment) {
      await queryInterface.addColumn('Characters', 'equipment', {
        type: Sequelize.JSON
      });
    }

    // Add a unique index for entityId if it doesn't exist
    const indexes = await queryInterface.showIndex('Characters');
    const entityIdIndexExists = indexes.some(index => index.name === 'characters_entity_id_unique');
    if (!entityIdIndexExists) {
      await queryInterface.addIndex('Characters', ['entityId'], {
        unique: true,
        name: 'characters_entity_id_unique'
      });
    }
  },

  async down (queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('Characters');

    if (tableInfo.entityId) {
      await queryInterface.removeColumn('Characters', 'entityId');
    }
    if (tableInfo.characterName) {
      await queryInterface.removeColumn('Characters', 'characterName');
    }
    if (tableInfo.age) {
      await queryInterface.removeColumn('Characters', 'age');
    }
    if (tableInfo.description) {
      await queryInterface.removeColumn('Characters', 'description');
    }
    if (tableInfo.house) {
      await queryInterface.removeColumn('Characters', 'house');
    }
    if (tableInfo.virtues) {
      await queryInterface.removeColumn('Characters', 'virtues');
    }
    if (tableInfo.flaws) {
      await queryInterface.removeColumn('Characters', 'flaws');
    }
    if (tableInfo.characteristics) {
      await queryInterface.removeColumn('Characters', 'characteristics');
    }
    if (tableInfo.abilities) {
      await queryInterface.removeColumn('Characters', 'abilities');
    }
    if (tableInfo.arts) {
      await queryInterface.removeColumn('Characters', 'arts');
    }
    if (tableInfo.spells) {
      await queryInterface.removeColumn('Characters', 'spells');
    }
    if (tableInfo.equipment) {
      await queryInterface.removeColumn('Characters', 'equipment');
    }

    // Remove the unique index for entityId
    await queryInterface.removeIndex('Characters', 'characters_entity_id_unique');
  }
};