const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story extends Model { }

Story.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        story_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        story_text: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.TEXT('tiny'),
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'author',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'story'
    }
);

module.exports = Story;