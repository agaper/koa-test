const articleCatModel = require('../model/article_cat');

class ArticleCatService{

  static async create (params){
    const res = await articleCatModel.create({
      ...params,  
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return res;
  }

  static async list(){
    const res = await articleCatModel.findAll();
    return res;
  }

  static async getOne(id){
    const res = await articleCatModel.findOne({
      where: { id }
    });
    return res;
  }

  static async del(id){
    // 1-删除成功
    const res = await articleCatModel.destroy({
      where: { id }
    });
    return res;
  }

  static async update(id, params){
    const model = await articleCatModel.findOne({
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

module.exports = ArticleCatService;