var sqlMap = {
    // 首页推广的两个
    index: {
        ishome:"select * from shares where ishome = 1 order by id desc limit 2",        //首页推广的两个                   
    },
    // 技术分享
    shares: {
        shareList: 'select * from shares order by id desc limit ?,5',				    //技术分享列表										                                        
        shareDetail: 'select * from shares where id = ?',		                        //技术分享详情
        shareSorting:'select * from shares order by browse desc limit 5',               //技术分享按照浏览次数排序
        recomShare:"select * from shares where isrecom = 1 order by id desc limit 5",   //技术分享本栏推荐                   
    },
    // 读书笔记
    notes: {
        noteList: 'select * from notes order by id desc limit ?,6',                                            //读书笔记列表
        noteDetail: 'select * from notes where id = ?',                             //读书笔记详情
    },
    // 我的日志
    logs: {
        logList: 'select * from logs order by id desc limit ?,5',                                              //我的日志列表
        logDetail: 'select * from logs where id = ?',                               //我的日志详情
    },
    // 最近在读
    readings: {
        readList: 'select * from readings',                                         //最近在读列表                                    
    },
    //留言
    message:{
        addMessage:'insert into message(`nickname`,`email`,`content`,`createdTime`) values ?'
    }
}

module.exports = sqlMap;