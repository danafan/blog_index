var express = require('express');
var publicApi = require('./publicApi');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

const app = express();

// 监听8090端口
var server = app.listen(8080,function () {
  console.log("服务器已连接，访问地址为：localhost:8090");
});   

app.use(cookieParser('secret'));
// 使用session中间件
app.use(session({
    secret : 'secret',            // 一个String类型的字符串，作为服务器端生成session的签名
    name: "cookieName",           // 这里的name指的是cookie的name，默认cookie的name是：connect.sid
    resave : true,                // 是否允许session重新设置，要保证session有操作的时候必须设置这个属性为true。
    rolling: true,				  // 是否按照原设定的maxAge值重设session同步到cookie中，要保证session有操作的时候必须设置这个属性为true
    saveUninitialized: false,     // 初始化session时是否保存到存储。默认为true，
    cookie : {
        maxAge : 1000 * 60 * 720, // session有效时间，如果停留一个页面12小时不动自动退出，12小时内有接口请求自动顺延
    },
}));

//express处理post请求参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

// 服务开启后访问指定编译好的dist文件下的数据
app.use(express.static(path.resolve(__dirname, '../dist')));

//公共控制器
app.use('/home', publicApi);







