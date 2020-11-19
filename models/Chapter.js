const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chapter extends Model {}

Chapter.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        chapter_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        chapter_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'author',
              key: 'id'
            }
        },
        story_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'story',
              key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'chapter'
    }
);

module.exports = Chapter; 