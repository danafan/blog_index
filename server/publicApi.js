var express = require('express');           
var models = require('./db');             //数据库链接信息
var mysql = require('mysql');               
var $sql = require('./sql');              //sql语句

//连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

var app = express();

//增加浏览量
app.get('/addBrowse',(req, res) => {   
    var sql = 'update browse set count=count+1';
    //根据sql语句对数据库进行查询
    conn.query(sql,function(err,result) {   
        if (result) {
         var response = JSON.stringify({code:0,msg:"修改成功"});
         res.send(response);
     }
     if (err) {       
        var response = JSON.stringify({code:1,msg:"修改失败"});
        res.send(response);
    }  
})
});

//首页的两个
app.get('/indexList', (req, res) => { 
    var sql = $sql.index.ishome;
    //根据sql语句对数据库进行查询
    conn.query(sql, function(err, result) { 
        if (result) {
            jsonWrite(res, result);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"列表获取失败"});
            res.send(response);
        }    
    });
});

// 获取首页左下角数据
app.get('/leftList', (req, res) => { 
    var sql = "select count(*) as shareCount from shares";          //技术分享总数
    var sql1 = "select count(*) as noteCount from notes";           //读书笔记总数
    var sql2 = "select count(*) as logCount from logs";             //日志总数
    var sql3 = "select * from browse";                              //总浏览量
    var sql4 = "select count(*) as comCount from commentary";       //评论总数
    var sqls = sql + ';' + sql1 + ';' + sql2 + ';' + sql3 + ';' + sql4;
    //根据sql语句对数据库进行查询
    conn.query(sqls,function(err, results) { 
        if (results) {
            jsonWrite(res, results);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"左下角数据获取失败"});
            res.send(response);
        }    
    });
});


// 发表评论
app.post('/reply',(req, res) => { 
    let wid = req.body.wid;
    let gid = req.body.gid;
    let pid = req.body.pid;
    let pname = req.body.pname;
    let username = req.body.username;
    let email = req.body.email;
    let content = req.body.content;
    let createdTime = Date.parse(new Date());
    var values = [[wid,gid,pid,pname,username,email,content,createdTime]];
    var sql = 'insert into commentary(`wid`,`gid`,`pid`,`pname`,`username`,`email`,`content`,`createdTime`) values ?';
    //根据sql语句对数据库进行插入
    conn.query(sql,[values],function(err,result) {   
        if (result) {
            var response = JSON.stringify({code:0,msg:"评论发表成功"});
            res.send(response);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"回复失败"});
            res.send(response);
        }  
    })
});

//获取所有评论的数据
app.get('/allCom', (req, res) => { 
    var gid = req.query.gid;
    var id = req.query.id;
    var values = [gid,id];
    var sql1 = 'select * from commentary where gid = ? and wid = ?';
    conn.query(sql1,values, function(err, result1) { 
        if (result1) {
            var arr = [];
            result1.forEach(function(val){
                arr.push(val);
            });
            jsonWrite(res, tree(arr));
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"评论获取失败"});
            res.send(response);
        }    
    });
});

var tree = function(data) {
    var map = {};
    data.forEach(function (item) {
        map[item.id] = item;       //这里的ID根据数据库的字段
    });
    var val = [];
    data.forEach(function (item) {
        var parent = map[item.pid];      //这里是父级ID---pid
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            val.push(item);
        }
    });
    return val;
}

// 技术分享列表
app.get('/shareList', (req, res) => { 
    var sql = $sql.shares.shareList;
    var page = (req.query.page - 1)*5;
    //根据sql语句对数据库进行查询
    conn.query(sql,page,function(err, results) { 
        if (results) {
            let sql1 = 'select count(*) as count from shares';
            conn.query(sql1,function(err, result) { 
                if (result) {
                    var response = JSON.stringify({code:0,total:result[0].count,data: results});
                    res.send(response);
                }
                if (err) {       
                    var response = JSON.stringify({code:1,msg:"技术分享列表获取失败"});
                    res.send(response);
                }    
            });
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"技术分享列表获取失败"});
            res.send(response);
        }    
    });
});

// 技术分享按照点击量排序  
app.get('/shareSortList', (req, res) => { 
    var sql = $sql.shares.shareSorting;
    //根据sql语句对数据库进行查询
    conn.query(sql, function(err, result) { 
        if (result) {
            jsonWrite(res, result);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"技术分享列表获取失败"});
            res.send(response);
        }    
    });
});

//技术分享推荐列表  
app.get('/shareRecom', (req, res) => { 
    var sql = $sql.shares.recomShare;
    //根据sql语句对数据库进行查询
    conn.query(sql, function(err, result) { 
        if (result) {
            jsonWrite(res, result);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"技术分享列表获取失败"});
            res.send(response);
        }    
    });
});

// 技术分享详情
app.get('/getShareDetail',(req, res) => {   
    var id = req.query.id;
    var sql = $sql.shares.shareDetail;
    var values = [[id]];
    //根据sql语句对数据库进行查询
    conn.query(sql,[values],function(err,result) {   
        if (result) {
            jsonWrite(res, result);
            //获取浏览量
            var browse = result[0].browse;
            updateShareBrowse(browse,id);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"查询详情失败"});
            res.send(response);
        }  
    })
});

//技术分享增加浏览量
var updateShareBrowse = function(browse,id){
    var sql = 'update shares set browse = ? where id = ?';
    var values = [browse + 1,id];
    //修改浏览量
    conn.query(sql,values,function(err,result) {})
}

// 读书笔记列表
app.get('/noteList', (req, res) => { 
    var sql = $sql.notes.noteList;
    var page = (req.query.page - 1)*6;
    //根据sql语句对数据库进行查询
    conn.query(sql,page, function(err, results) { 
        if (results) {
            let sql1 = 'select count(*) as count from notes';
            conn.query(sql1,function(err, result) { 
                if (result) {
                    var response = JSON.stringify({code:0,total:result[0].count,data: results});
                    res.send(response);
                }
                if (err) {       
                    var response = JSON.stringify({code:1,msg:"读书笔记列表获取失败"});
                    res.send(response);
                }    
            });
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"读书笔记列表获取失败"});
            res.send(response);
        }    
    });
});

// 读书笔记详情
app.get('/noteDetail',(req, res) => {   
    var id = req.query.id;
    var sql = $sql.notes.noteDetail;
    var values = [[id]];
    //根据sql语句对数据库进行查询
    conn.query(sql,[values],function(err,result) {   
        if (result) {
            jsonWrite(res, result);
            //获取浏览量
            var browse = result[0].browse;
            updateNoteBrowse(browse,id);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"查询详情失败"});
            res.send(response);
        }  
    })
});

//读书笔记增加浏览量
var updateNoteBrowse = function(browse,id){
    var sql = 'update notes set browse = ? where id = ?';
    var values = [browse + 1,id];
    //修改浏览量
    conn.query(sql,values,function(err,result) {})
}

// 我的日志列表
app.get('/logList', (req, res) => { 
    var sql = $sql.logs.logList;
    var page = (req.query.page - 1)*5;
    //根据sql语句对数据库进行查询
    conn.query(sql,page, function(err, results) { 
        if (results) {
            let sql1 = 'select count(*) as count from logs';
            conn.query(sql1,function(err, result) { 
                if (result) {
                    var response = JSON.stringify({code:0,total:result[0].count,data: results});
                    res.send(response);
                }
                if (err) {       
                    var response = JSON.stringify({code:1,msg:"我的日志列表获取失败"});
                    res.send(response);
                }    
            });
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"我的日志列表获取失败"});
            res.send(response);
        }    
    });
});

// 我的日志详情
app.get('/logDetail',(req, res) => {   
    var id = req.query.id;
    var sql = $sql.logs.logDetail;
    var values = [[id]];
    //根据sql语句对数据库进行查询
    conn.query(sql,[values],function(err,result) {   
        if (result) {
            jsonWrite(res, result);
            //获取浏览量
            var browse = result[0].browse;
            updateLogBrowse(browse,id);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"查询详情失败"});
            res.send(response);
        }  
    })
});

//我的日志增加浏览量
var updateLogBrowse = function(browse,id){
    var sql = 'update logs set browse = ? where id = ?';
    var values = [browse + 1,id];
    //修改浏览量
    conn.query(sql,values,function(err,result) {})
}

//最近在读列表       
app.get('/readList', (req, res) => { 
    var sql = $sql.readings.readList;
    //根据sql语句对数据库进行查询
    conn.query(sql, function(err, result) { 
        if (result) {
            jsonWrite(res, result);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"最近在读列表获取失败"});
            res.send(response);
        }    
    });
});

//点赞
app.get('/approving',(req, res) => {   
    var type = req.query.type;                   //type(0:技术分享；1:读书笔记；2:我的日志)
    var id = req.query.id;                       //id
    if(type == 0){
        var sql = 'update shares set point=point+1 where id = ' + id;
    }else if(type == 1){
        var sql = 'update notes set point=point+1 where id = ' + id;
    }else if(type == 2){
        var sql = 'update logs set point=point+1 where id = ' + id;
    }
    //根据sql语句对数据库进行查询
    conn.query(sql,function(err,result) {   
        if (result) {
         var response = JSON.stringify({code:0,msg:"修改成功"});
         res.send(response);
     }
     if (err) {       
        var response = JSON.stringify({code:1,msg:"修改失败"});
        res.send(response);
    }  
})
});

// 留言
app.post('/addMessage',(req, res) => { 
    let username = req.body.username;
    let email = req.body.email;
    let content = req.body.content;
    let createdTime = Date.parse(new Date());
    let values = [[username,email,content,createdTime]];
    let sql = $sql.message.addMessage;
    //根据sql语句对数据库进行插入
    conn.query(sql,[values],function(err,result) {   
        if (result) {
            var response = JSON.stringify({code:0,msg:"留言发表成功"});
            res.send(response);
        }
        if (err) {       
            var response = JSON.stringify({code:1,msg:"留言发表失败"});
            res.send(response);
        }  
    })
});



// 请求成功后对返回数据的处理
var jsonWrite = function(res, result) {
    var response = JSON.stringify({code:0,data: result});
    res.send(response);
};

module.exports = app;







