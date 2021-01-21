const articleModel = require('../model/article');
const articleCatModel = require('../model/article_cat');

// articleCatModel.hasMany(articleModel);

class ArticleService{

  static async create (params){
    const res = await articleModel.create({
      ...params
    });
    return res;
  }

  static async list(){
    const res = await articleModel.findAll();
    return res;
  }

  static async getOne(id){
    const res = await articleModel.findOne({
      where: { id }
    });
    return res;
  }

  static async del(id){
    // 1-删除成功
    const res = await articleModel.destroy({
      where: { id }
    });
    return res;
  }

  static async update(id, params){
    const model = await articleModel.findOne({
      where: { id }
    });
    if( model ){
      const updatedModel = await model.update({
        ...params
      });
      return updatedModel.save();
    }else{
      return '数据不存在';
    }
  }  

}

module.exports = ArticleService;