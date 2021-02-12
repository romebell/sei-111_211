'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.song.belongsToMany(models.playlist, { through: 'songsPlaylists' });
    }
  };
  song.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    trackUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'song',
  });
  return song;
};