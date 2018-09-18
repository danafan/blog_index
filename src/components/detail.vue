<template>
	<div>
		<div class="box">
			<!-- 上面的文字 -->
			<div class="content">
				<!-- 顶部标题 -->
				<div class="topBox">
					<div class="title">{{detailObj.title}}</div>
					<div class="jia">
						<div class="time">发布时间：{{detailObj.createdTime | updateTime}}</div>
						<div class="shou">
							<div class="yan">
								<div class="shu">{{detailObj.browse}}</div>
								<img src="../assets/eyes.png">
							</div>
							<div class="zan">
								<div class="shu">{{detailObj.point}}</div>
								<img src="../assets/zan.png">
							</div>
						</div>
					</div>
				</div>
				<!-- 下面内容 -->
				<div class="textCon" v-html="detailObj.content"></div>
			</div>
			<!-- 点赞 -->
			<div class="zanBox" :class="{'selZan':showZan == true}" @mouseenter="showZan = true" @mouseleave="showZan = false" @click="approving">
				<div class="left">
					<div class="txt">赞一个</div>
					<img src="../assets/zan1.png" v-if="showZan == false">
					<img src="../assets/zan2.png" v-else>
				</div>
				<div class="line"></div>
				<div class="shus">{{detailObj.point}}</div>
			</div>
			<!-- 评论 -->
			<div class="point">
				<div class="tabTxt">
					<div class="col"></div>
					<div class="txt">评论</div>
				</div>
				<textarea class="mess" placeholder="写下您的评论（200字以内）..." v-model="message"></textarea>
				<div class="buts">
					<div class="submit" @click="subReply">发表</div>
				</div>
			</div>
			<!-- 最新评论 -->
			<div class="point">
				<div class="tabTxt">
					<div class="col"></div>
					<div class="txt">最新评论</div>
				</div>
				<!-- 评论列表 -->
				<div class="applist" v-if="replyList.length > 0">
					<div class="appItem" v-for="(item,index) in replyList">
						<div class="user">
							<img src="../assets/net.png">
							<div class="biao">
								<div class="username">{{item.username}}</div>
								<div class="miao"># {{index + 1}}楼 {{item.createdTime | updateTime}}</div>
							</div>
						</div>
						<div class="contenTxt">{{item.content}}</div>
						<div class="info">
							<div class="reply" @click="reback(item)" :class="{'selReply':item.zhan == true}">{{item.zhan == true?'取消回复':'回复'}}</div>
							<div class="allReply" :class="{'selAllReply':item.defaults == true}" @click="isdefault(item)">{{item.defaults == true?'收起全部':'查看全部'}}</div>
						</div>
						<!-- 一级评论的回复框 -->
						<div class="replyItem" v-if="item.zhan == true">
							<textarea class="mess" :placeholder="item.place" v-model="item.message"></textarea>
							<div class="buts">
								<div class="submit" @click="reply(item)">回复</div>
							</div>
						</div>
						<div class="children" v-show="item.defaults == true">
							<reply v-for="(obj,index) in item.children" :key="index" :obj="obj" @callbackFn="callback"></reply>
						</div>
					</div>
				</div>
				<!-- 评论列表为空 -->
				<div class="emptyBox" v-else>
					<img class="empty" src="../assets/empty.png">
					<div class="toast">还没有评论，去抢沙发吧～～～</div>
				</div>
			</div>
		</div>
		<!-- 输入昵称和邮箱弹框 -->
		<div class="replyModel" v-if="isLogin" @click="isLogin = false">
			<div class="replyBox" @click.stop>
				<div class="loginTitle">用户登录</div>
				<el-form label-width="60px">
					<el-form-item label="昵称">
						<el-input v-model="nickname" placeholder="昵称"></el-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input v-model="email" placeholder="邮箱"></el-input>
					</el-form-item>
				</el-form>
				<div class="login" @click="login">登录</div>
				<div class="desc">说明：昵称仅用于评论展示（请注意要优雅 ^_^），博主会不定期挑选精彩评论的发布者，邮箱会收到小惊喜哦，请放心填写！</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	border: 1px solid #f4f4f4;
	margin: .4rem auto .4rem;
	width: 70%;
	// 上面的文字
	.content{
		.topBox{
			width: 100%;
			background: #F9F9F9;
			padding: .2rem .2rem .14rem;
			.title{
				margin-bottom: .3rem;
				width: 65%;
				font-weight: bold;
				font-size: 22px;
			}
			.jia{
				display:flex;
				font-size: 14px;
				color: #666;
				.time{
					margin-right: .4rem;
				}
				.shou{
					display:flex;
					align-items: center;
					.yan{
						margin-right: .1rem;
						display:flex;
						align-items: center;
						img{
							margin-left: .04rem;
							width: .16rem;
							height: .15rem;
						}
					}
					.zan{
						display:flex;
						align-items: center;
						img{
							position: relative;
							top: -.02rem;
							margin-left: .04rem;
							width: .16rem;
							height: .15rem;
						}
					}
				}
			}
		}
		/deep/ .textCon{
			padding: .2rem;
			width: 100%;
			font-size: 14px;
			p,ul li{
				line-height: 26px;
			}
			pre{
				margin-top: .1rem;
				margin-bottom: .1rem;
				padding: .1rem;
				border-radius: .06rem;
				overflow:auto;
				white-space:pre-wrap;
				background: rgb(27,28,24);
				color: #fff;
				line-height: 26px;
				font-size:15px;
			}
			img{
				max-width: 60%;
			}
		}
	}
	.zanBox{
		margin: .1rem auto .3rem;
		border-radius: 5rem;
		width: 1.8rem;
		height: .48rem;
		border: 1px solid red;
		display:flex;
		align-items: center;
		justify-content:space-around;
		padding-right: .2rem;
		padding-left: .2rem;
		.left{
			display:flex;
			align-items: center;
			.txt{
				margin-right: .05rem;
				font-size: 16px;
				color: red;
				font-weight: bold;
			}
			img{
				position: relative;
				top: -.04rem;
				width: .22rem;
				height: .22rem;
			}
		}
		.line{
			border-left: 2px solid red;
			height: .3rem;
		}
		.shus{
			font-size: 18px;
			color: red;
			font-weight: bold;
		}
	}
	.selZan{
		background: red;
		.left{
			.txt{
				color: #fff;
			}
			img{
				transform: scale(1.2);
			}
		}
		.line{
			border-left: 2px solid #fff;
		}
		.shus{
			color: #fff;
		}
	}
	//点赞
	.point{
		background: rgba(241,241,241,.4);
		padding:.1rem .2rem;
		.tabTxt{
			display:flex;
			align-items: center;
			.col{
				margin-right: .1rem;
				background: #38A1F3;
				border-radius: .08rem; 
				width: .06rem;
				height: .3rem;
			}
			.txt{
				font-size: 16px;
				font-weight: bold;
			}
		}
		.mess{
			margin-top: .1rem;
			border-radius:.08rem;
			border:1px solid #f5f5f5; 
			width: 98%;
			height: 1rem;
			font-size: 15px;
			padding: .1rem;
			outline: none;
			resize:none;
		}
		.buts{
			position: relative;
			top: -.2rem;
			width: 100%;
			display:flex;
			justify-content:flex-end;
			.submit{
				border-radius:.05rem; 
				background: #38A1F3;
				width: .9rem;
				text-align: center;
				height: .3rem;
				line-height: .3rem;
				font-size: 14px;
				color: #fff;
			}
			.submit:hover{
				background: rgb(44,129,208);
			};
		}
		//包括所有一级评论
		.applist{
			margin-top: .2rem;
			// 评论列表
			.appItem{
				margin-bottom: .2rem;
				border-bottom: 1px solid #999;
				padding-bottom: .1rem;
				.user{
					margin-bottom: .06rem;
					display:flex;
					align-items: center;
					img{
						margin-right: .1rem;
						border-radius: 50%;
						width: .36rem;
						height: .36rem;
					}
					.biao{
						display:flex;
						flex-direction: column;
						justify-content:space-between;
						.username{
							font-size: 15px;
							font-weight: bold;
							color: #333;
						}
						.miao{
							font-size: 12px;
							color: #666;
						}
					}		
				}
				.contenTxt{
					margin-left: .5rem;
					font-size: 13px;
					color: #333;
				}
				.info{
					margin-top: .05rem;
					display:flex;
					justify-content:flex-end;
					align-items: center;
					font-size: 13px;
					color: #38A1F3;
					.reply{
						margin-right: .2rem;
					}
					.allReply:hover{
						color: rgb(44,129,208);
					}
					.selAllReply{
						color: red;
					}
					.reply:hover{
						color: rgb(44,129,208);
					};
					.selReply{
						color: red;
					}
				}
				.replyItem{
					width: 100%;
					.mess{
						margin-top: .1rem;
						border-radius:.08rem;
						border:1px solid #f5f5f5; 
						width: 98%;
						height: 1rem;
						font-size: 13px;
						padding: .1rem;
						outline: none;
						resize:none;
					}
					.buts{
						position: relative;
						top: -.2rem;
						width: 100%;
						display:flex;
						justify-content:flex-end;
						.submit{
							border-radius:.05rem; 
							background: #38A1F3;
							width: .6rem;
							text-align: center;
							height: .3rem;
							line-height: .3rem;
							font-size: 14px;
							color: #fff;
						}
						.submit:hover{
							background: rgb(44,129,208);
						};
					}
				}
				.children{
					margin-top: .05rem;
					padding-top: .1rem;
					border-top: 1px solid #f5f5f5;
					margin-left: .5rem;
				}
			}
		}
		// 评论为空
		.emptyBox{
			margin-top: .5rem;
			margin-bottom: .5rem;
			display:flex;
			flex-direction: column;
			align-items: center;
			.empty{
				display:block;
				width: 1.4rem; 
				height: .9rem;
			}
			.toast{
				font-size: 14px;
				color: #666;
			}
		}
	}
}
// 输入评论弹框
.replyModel{
	background: rgba(0,0,0,.6);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
	display:flex;
	align-items: center;
	justify-content:center;
	.replyBox{
		position: relative;
		padding-right: .2rem;
		border-radius:.1rem; 
		background: #fff;
		width: 5rem;
		height: 3.4rem;
		.loginTitle{
			width: 100%;
			height: .8rem;
			line-height: .8rem;
			text-align:center;
			font-size: 20px;
		}
		.login{
			margin:0 auto;
			border-radius:3rem; 
			background: #38A1F3;
			width: 1.8rem;
			text-align:center;
			height: .46rem;
			line-height: .46rem;
			color: #fff;
			font-size: 16px;
		}
		.login:hover{
			background: rgb(44,129,208);
		}
		.desc{
			margin-bottom: .05rem;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			padding-right: .2rem;
			padding-left: .2rem;
			font-size: 12px;
			color: #999;
		}
	}
}
</style>
<script>
	import reply from '../common/reply.vue'
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				message:"",				//主评论内容
				type:"",				//类型（0:技术分享；1:读书笔记；2:我的日志）
				id:"",					//id
				detailObj:{},			//详情对象
				showZan: false,			//点赞图标默认状态
				replyList:[],			//该文章下所有评论列表
				isLogin: false,			//默认用户登录框不显示
				nickname:"",			//用户昵称
				email:"",				//用户邮箱
			}
		},
		created(){
			window.scrollTo(0,0);
			this.type = this.$route.query.type;	//获取类型
			this.id = this.$route.query.id;		//获取id
			if(this.type == "0"){				//技术分享
				this.getShareDetail();
			}else if(this.type == "1"){			//读书笔记
				this.getNoteDetail();
			}else if(this.type == "2"){			//我的日志
				this.getLogDetail();
			};
			//获取评论列表
			this.getReply();
		},
		methods:{
			//技术分享详情
			getShareDetail(){
				resource.getShareDetail({id:this.id}).then(res => {
					if (res.data.code == "0") {
						this.detailObj = res.data.data[0];
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//读书笔记详情
			getNoteDetail(){
				resource.getNoteDetail({id:this.id}).then(res => {
					if (res.data.code == "0") {
						this.detailObj = res.data.data[0];
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//我的日志详情
			getLogDetail(){
				resource.getLogDetail({id:this.id}).then(res => {
					if (res.data.code == "0") {
						this.detailObj = res.data.data[0];
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//点赞
			approving(){
				let obj = {
					type: this.type,
					id:this.id
				}
				resource.approving(obj).then(res => {
					if(res.data.code =="0"){
						if(this.type == "0"){				//技术分享
							this.getShareDetail();
						}else if(this.type == "1"){			//读书笔记
							this.getNoteDetail();
						}else if(this.type == "2"){			//我的日志
							this.getLogDetail();
						}
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//登录
			login(){
				if(this.nickname == ""){
					this.$message({
						message: "请填写您的昵称",
						type: 'warning'
					});
				}else if(!this.confirmationEmail.test(this.email)){
					this.$message({
						message: "请填写正确的邮箱",
						type: 'warning'
					});
				}else{
					this.$message({
						message: "登录成功",
						type: 'success'
					});
					this.isLogin = false;
					let userObj = {
						nickname: this.nickname,
						email:this.email
					}
					localStorage.setItem('userObj',JSON.stringify(userObj))
				}
			},
			//发表一级评论
			subReply(){
				let userObj = JSON.parse(localStorage.getItem('userObj'));
				if(!this.message){
					this.$message({
						message: "请输入要评论的内容哦～",
						type: 'warning'
					});
				}else if(!userObj || !userObj.nickname || !userObj.email){
					this.isLogin = true;
				}else{
					let obj = {
						wid: parseInt(this.id),					//文章id
						gid: parseInt(this.type),				//文章类型id
						pid: 0,									//被评论者的id
						pname: "无",								//被评论者的昵称
						username: userObj.nickname,				//评论者的昵称
						email:userObj.email,					//评论者的邮箱
						content:this.message,					//评论的内容
					}
					//发表评论
					this.replyPubilc(obj);
				}
			},
			//获取评论列表
			getReply(){
				let obj = {
					gid:this.type,
					id: this.id
				}
				resource.allCom(obj).then(res => {
					if(res.data.code == "0"){
						let list = res.data.data;
						for (var i = 0; i < list.length; i++) {
							list.defaults = false;
						}
						this.replyList = list;
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//点击某一级评论的回复按钮
			reback(obj){
				this.$set(obj,'zhan',!obj.zhan);				//加一个回复框展示或不展示
				this.$set(obj,'place','回复 (200字以内) @' + obj.username);	//加一个回复框展示或不展示
				this.$set(obj,'message','');					//清空回复一级评论的内容
			},
			//发表回复一级评论的回复
			reply(item){
				let userObj = localStorage.getItem('userObj');
				if(!item.message){
					this.$message({
						message: "请输入要评论的内容哦～",
						type: 'warning'
					});
				}else if(!userObj && userObj.nickname != "" && userObj.email != ""){
					this.isLogin = true;
				}else{
					let userObj = JSON.parse(localStorage.getItem('userObj'));
					let obj = {
						wid: parseInt(this.id),					//文章id
						gid: parseInt(this.type),				//文章类型id
						pid: item.id,							//被评论者的id
						pname: item.username,					//被评论者的昵称
						username: userObj.nickname,				//评论者的昵称
						email:userObj.email,					//评论者的邮箱
						content:item.message,					//评论的内容
					}
					//发表评论
					this.replyPubilc(obj);
				}
			},	
			//点击某一条展开评论列表
			isdefault(item){
				//如果存在子集评论就展开
				if(!!item.children){
					this.$set(item,'defaults',!item.defaults);
				}
				
			},
			//回复子集用户的评论
			callback(val){
				let userObj = localStorage.getItem('userObj');
				if(!userObj && userObj.nickname != "" && userObj.email != ""){
					this.isLogin = true;
				}else{
					let userObj = JSON.parse(localStorage.getItem('userObj'));
					let obj = {
						wid: parseInt(this.id),					//文章id
						gid: parseInt(this.type),				//文章类型id
						pid: val.userObj.id,					//被评论者的id
						pname: val.userObj.username,			//被评论者的昵称
						username: userObj.nickname,				//评论者的昵称
						email:userObj.email,					//评论者的邮箱
						content:val.message,					//评论的内容
					}
					//发表评论
					this.replyPubilc(obj);
				}
			},
			//发表评论
			replyPubilc(obj){
				resource.reply(obj).then(res => {
					if(res.data.code == "0"){
						//获取评论列表
						this.getReply();
						//清空主评论内容
						this.message = "";
						this.$message({
							message: res.data.msg,
							type: 'success'
						});
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			}
		},
		filters:{
			updateTime(time){
				let times = parseInt(time);
				var time = new Date(times);
				var y = time.getFullYear();
				var m = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1);
				var d = (time.getDate() < 10 ? '0'+(time.getDate()) : time.getDate());
				var h = (time.getHours() < 10 ? '0'+(time.getHours()) : time.getHours());
				var mm = (time.getMinutes() < 10 ? '0'+(time.getMinutes()) : time.getMinutes());
				var s = (time.getSeconds() < 10 ? '0'+(time.getSeconds()) : time.getSeconds());
				return y+'-'+m+'-'+d + " " + h + ":" + mm + ":" + s;
			}
		},
		components:{
			reply
		}
	}
</script>









