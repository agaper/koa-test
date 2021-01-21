const Router = require("koa-router");
const requireDirectory = require('require-directory');

function LoadModule(obj){
  console.log(obj);
  if( obj instanceof Router ){
    RouterInitManager.app.use(obj.routes());
  }
}

class RouterInitManager {
  static initCore(app){
    RouterInitManager.app = app;
    RouterInitManager.initRouters();
  }

  static initRouters(){
    const adminDir = `${process.cwd()}/api/admin`;
    requireDirectory(module, `${adminDir}/v1`, { visit: LoadModule } );
    requireDirectory(module, `${adminDir}/v2`, { visit: LoadModule } );

    requireDirectory(module, `${process.cwd()}/api/`, { visit: LoadModule } );

  }

}

module.exports = RouterInitManager;

