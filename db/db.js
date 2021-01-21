const Sequelize = require("sequelize");
const config = require("./config");

const sequelizeInstance = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    {
        host: config.host,
        //指定连接的数据库类型 
        dialect: 'mysql', 
        pool: {
            //连接池最大连接数量
            max: 5, 
            //最小连接数量
            min: 0, 
            //如果一个线程 10秒内么有被使用过的话，就释放
            idle: 10 * 1000, 
        },
        // 执行过程会log一些SQL的logging，设为false不显示
        logging: true, 
        //东八时区
        timezone: '+08:00' 
    }
)

//对连接进行测试，查看控制台
// sequelizeInstance.authenticate().then(() => {
//     console.log('****** Connection has been established successfully.******** ');
//     console.log('****** 测试结束，即将退出！！！********');
//     process.exit(); //结束进程
// }).catch(err => {
//     console.error('****** Unable to connect to the database: ******', err);
// });
 
module.exports = sequelizeInstance;