import http from './request.js'
let path = {	
	addBrowse:"addBrowse",				//浏览量加1
	leftList: "leftList",			    //获取首页左下角所有数据
	getIndexList:"indexList",			//首页的两个
	shareList:"shareList",				//获取技术分享列表
	shareSortList: "shareSortList",		//技术分享点击量排序
	shareRecom:"shareRecom",			//技术分享本栏推荐
	getShareDetail:"getShareDetail",	//获取技术分享详情
	noteList: "noteList",				//获取读书笔记列表
	getNoteDetail:"noteDetail",			//获取读书笔记详情
	getReadList:"readList",				//最近在读列表
	logList: "logList",					//获取我的日志列表
	getLogDetail:"logDetail",			//获取我的日志详情
	approving: "approving",				//点赞
	addMessage:"addMessage",			//留言
	allCom: "allCom",					//获取所有评论
	reply:"reply",						//发表评论
	imgList:"imgList",					//获取首页图片列表
}
export default{
	//浏览量加1
	addBrowse(params){
		return http.get(path.addBrowse, params)
	},
	//获取首页左下角所有数据
	leftList(params){
		return http.get(path.leftList, params)
	},
	//获取首页的两个
	getIndexList(params){
		return http.get(path.getIndexList, params)
	},
	//获取技术分享列表
	shareList(params){
		return http.get(path.shareList, params)
	},
	//技术分享点击量排序
	shareSortList(params){
		return http.get(path.shareSortList, params)
	},
	//技术分享本栏推荐
	shareRecom(params){
		return http.get(path.shareRecom, params)
	},
	//获取技术分享详情
	getShareDetail(params){
		return http.get(path.getShareDetail, params)
	},
	//获取读书笔记列表
	noteList(params){
		return http.get(path.noteList, params)
	},
	//获取读书笔记详情
	getNoteDetail(params){
		return http.get(path.getNoteDetail, params)
	},
	//最近在读列表
	getReadList(params){
		return http.get(path.getReadList, params)
	},
	//获取我的日志列表
	logList(params){
		return http.get(path.logList, params)
	},
	//获取我的日志详情
	getLogDetail(params){
		return http.get(path.getLogDetail, params)
	},
	//点赞
	approving(params){
		return http.get(path.approving, params)
	},
	//留言
	addMessage(params){
		return http.post(path.addMessage, params)
	},
	//获取所有评论
	allCom(params){
		return http.get(path.allCom, params)
	},
	//发表评论
	reply(params){
		return http.post(path.reply, params)
	},
	//获取首页图片列表
	imgList(params){
		return http.get(path.imgList, params)
	},
}