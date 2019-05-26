const fs = require('fs');
const path = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const userRouter = require('./user/index.js')
const aboutPageRouter = require('./aboutPage/index.js')


//路由
const app = express();

//添加请求解析中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'qrddtrrtr', //加密秘钥,需要随机生成
    name: 'logInfo', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 300000 }, //设置maxAge是300000ms，即300s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true
}));

//添加静态服务目录
app.use(express.static('./public'));

// define the home page route
app.use('/user', userRouter);
app.use('/aboutPage', aboutPageRouter);

app.listen(82, () => console.log('CWM funny app listening on port 82!'));