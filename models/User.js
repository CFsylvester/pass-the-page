const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrpy = require('bcrypt');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

// if user's email is used for facebook, linkedin & Twitter, can use that for all logins.

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [5]
        }
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        valide: {
            len: [8]
        }
    },
    facebookPw: {
        type: DataTypes.STRING,
        allowNull: false
    },
    twitterPw: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkedInPw: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hooks: {
        async createUser(newUser) {
            newUser.password = await bcrypt.hash(newUser.password, 15);
            return newUser;
        },
        async updateUser(updatedUser) {
            updatedUser.password = await bcrypt.hash(updatedUser.password, 15);
            return updatedUser;
        }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;