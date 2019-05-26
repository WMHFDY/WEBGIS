var express = require('express')
var router = express.Router()


let dataSet = new Map(); //暂时充当数据集，存储注册信息

router.get('/', function(req, res) {
    //res.send('---login and regist---');
    //应加入输入验证----yyyy----
});

router.post('/login', function(req, res) {
    if (dataSet.get(req.body.username) == req.body.pwd) {
        req.session.userName = req.body.username; // 假登录
        res.redirect('/');
    } else {
        res.json({ status: 0, msg: '账号或密码错误' }); // 返回登录失败信息
    }
});

router.post('/regist', function(req, res) {
    if (dataSet.get(req.body.username))
        res.json({ status: 0, msg: '账号名已存在' }); // 返回登录失败信息
    else {
        req.session.userName = req.body.username; // 假登录
        dataSet.set(req.body.username, req.body.pwd);
        res.json({ status: 1, msg: '注册成功' }); // 注册成功
    };
});

module.exports = router;