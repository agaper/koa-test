const Sequelize = require('sequelize');
const sequelizeInstance = require('../db/db');
const moment = require('moment');

// 文章 
let Article = sequelizeInstance.define('article', {
  
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  // catid: {
  //   type: Sequelize.BIGINT(11),
  // },
  createdAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
    }
}


}, {
  // 不要默认时间戳
  timestamps: true
});

// 同步表结构
Article.sync({
  // 强制同步，先删除表，然后新建
  force: false
});

module.exports = Article;