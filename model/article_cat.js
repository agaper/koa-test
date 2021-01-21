const Sequelize = require('sequelize');
const sequelizeInstance = require('../db/db');
const moment = require('moment');

// 文章分类
let ArticleCat = sequelizeInstance.define('article_cat', {
  
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  
  createdAt: {
    type: Sequelize.BIGINT,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  updatedAt: {
    type: Sequelize.BIGINT,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
    }
}


}, {
  // 不要默认时间戳
  timestamps: false
});

// 同步表结构
ArticleCat.sync({
  // 强制同步，先删除表，然后新建
  force: false
});

module.exports = ArticleCat;