'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      Character.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Character.hasMany(models.CharacterVirtueFlaw, { foreignKey: 'characterId', as: 'CharacterVirtueFlaws' });
    }

    // Calculate remaining virtue/flaw points
    getRemainingVirtueFlawPoints() {
      return this.maxVirtueFlawPoints - this.virtueFlawPoints;
    }
  }
  Character.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    entityId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entityType: {
      type: DataTypes.STRING,
      defaultValue: 'character'
    },
    characterType: {
      type: DataTypes.ENUM('Magus', 'Companion', 'Grog', 'Animal', 'Demon', 'Spirit', 'Faerie'),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 25,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    house: {
      type: DataTypes.ENUM('Bonisagus', 'Tremere', 'Guernicus', 'Mercere', 'Criamon', 'Ex Miscellenia', 'Verditius', 'Bjorner', 'Merenita', 'Tytalus', 'Jerbiton', 'Flambeau'),
      allowNull: true
    },
    abilities: DataTypes.JSON,
    arts: DataTypes.JSON,
    spells: DataTypes.JSON,
    equipment: DataTypes.JSON,

    // New fields for characteristics
    strength: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    stamina: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    dexterity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    quickness: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    intelligence: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    presence: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    communication: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    perception: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    useCunning: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    availableImprovementPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 7,
      allowNull: false
    },
    totalImprovementPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 7,
      allowNull: false
    },
    characteristicModifiers: {
      type: DataTypes.JSON,
      defaultValue: {},
      allowNull: false
    },

    // New fields for virtue/flaw point tracking
    virtueFlawPoints: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxVirtueFlawPoints: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};