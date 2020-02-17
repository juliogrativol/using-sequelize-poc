'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_friends',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id : {
          type: Sequelize.INTEGER,
          references : { model: 'users', key : 'id'},
          onUpdate : 'CASCADE',
          onDelete : 'CASCADE',
        },
        friend_id : {
          type: Sequelize.INTEGER,
          references : { model: 'friends', key : 'id'},
          onUpdate : 'CASCADE',
          onDelete : 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user_friends');
  }
};
