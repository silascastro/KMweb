/*module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define('user', {
      id: {type: DataTypes.INTEGER, primaryKey: true},
      name: {type: DataTypes.STRING},
      email: {type: DataTypes.STRING},
      password: {type: DataTypes.STRING},
    });
  
    return user;
}*/

const {Model, DataTypes} = require('sequelize');

class User extends Model{
  static init(connection){
    super.init({
      //id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'user',
      sequelize: connection
    })
  }
}

module.exports = User;