<template>
	<div>
		<!-- 顶部导航 -->
		<div class="tabBox" v-if="showTab == true">
			<div class="right">
				<div class="tabItem" :class="{'selTab':selIndex == 'index'}" @click="selIndex = 'index'">我的主页</div>
				<div class="tabItem" :class="{'selTab':selIndex == 'sharing'}" @click="selIndex = 'sharing'">技术分享</div>
				<div class="tabItem" :class="{'selTab':selIndex == 'note'}" @click="selIndex = 'note'">读书笔记</div>
				<div class="tabItem" :class="{'selTab':selIndex == 'log'}" @click="selIndex = 'log'">日志</div>
			</div>
		</div>
		<div class="tabBox2" v-else>
			<div class="right">
				<div class="tabItem" :class="{'selTab':selIndex == 'index'}" @click="selIndex = 'index'">我的主页</div>
				<div class="tabItem" :class="{'selTab':selIndex == 'sharing'}" @click="selIndex = 'sharing'">技术分享</div>
				<div class="tabItem" :class="{'selTab':selIndex == 'note'}" @click="selIndex = 'note'">读书笔记</div>
				<div class="tabItem" :class="{'selTab':selIndex == 'log'}" @click="selIndex = 'log'">日志</div>
			</div>
		</div>
		<!-- 下面内容 -->
		<router-view></router-view>
		<!-- 底部留言框 -->
		<div class="bottomBox">
			<div class="message">
				<img class="background" src="../assets/bottomback.jpg">
				<div class="models"></div>
				<div class="content">
					<div class="left">
						<div class="title">博客简介</div>
						<div class="jian">本博客由博主独立设计和开发，内容主要包括web前端开发技术的分享，整理的读书笔记以及日常的心得体会，期待与更多人交流学习，欢迎留言和评论哦 ^_^</div>
						<div class="stat">技术分享 <span>{{infoObj.shareCount}}</span></div>
						<div class="stat">读书笔记 <span>{{infoObj.noteCount}}</span></div>
						<div class="stat">我的日志 <span>{{infoObj.logCount}}</span></div>
						<div class="stat">评论总数 <span>{{infoObj.comCount}}</span></div>
						<div class="stat">总浏览量 <span>{{infoObj.browseCount}}</span></div>
					</div>
					<div class="right">
						<div class="inputItem">
							<img src="../assets/username.png">
							<input type="text" placeholder="昵称" v-model="username">
						</div>
						<div class="inputItem">
							<img src="../assets/emali.png">
							<input type="text" placeholder="邮箱" v-model="email">
						</div>
						<textarea class="mess" placeholder="写下您的留言（200字以内）..." v-model="message"></textarea>
						<div class="but">
							<div class="submit" @click="trans">发送</div>
						</div>
					</div>
				</div>
				<div class="setting">Copyright © 2018 ranbol.com All Rights Reserved | 浙ICP备18040628号</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.tabBox{
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(20, 30, 48, 0.5);
	width: 100%;
	height: .46rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-left: .25rem;
	padding-right: .25rem;
	z-index: 1;
	.left{
		width: .44rem;
		height: .26rem;
	}
	.right{
		display:flex;
		font-size: 14px;
		color: #fff;
		.tabItem{
			margin-right: 1rem;
		}
		.tabItem:hover{
			color: #38A1F3;
		}
		.selTab{
			color: #38A1F3;
		}
	}
	animation:.3s linear 0s myrotate ;
	-webkit-animation:.3s linear 0s myrotate; Safari and Chrome 
	-moz-animation:.3s linear 0s myrotate;
	-o-animation:.3s linear 0s myrotate;
}
@keyframes myrotate{
	0% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
@-webkit-keyframes myrotate{/* Safari and Chrome */
	0% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
@-moz-keyframes myrotate {	/* Firefox */
	0% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
@-o-keyframes myrotate{ /* Opera */
	0% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
.tabBox2{
	position: fixed;
	top: -.46rem;
	left: 0;
	background-color: rgba(20, 30, 48, 0.5);
	width: 100%;
	height: .46rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-left: .25rem;
	padding-right: .25rem;
	z-index: 1;
	.left{
		width: .44rem;
		height: .26rem;
	}
	.right{
		display:flex;
		font-size: 14px;
		color: #fff;
		.tabItem{
			margin-right: 1rem;
		}
		.tabItem:hover{
			color: #38A1F3;
		}
		.selTab{
			color: #38A1F3;
		}
	}
	animation:.5s linear 0s myrotate2 ;
	-webkit-animation:.5s linear 0s myrotate2; Safari and Chrome 
	-moz-animation:.5s linear 0s myrotate2;
	-o-animation:.5s linear 0s myrotate2;
}
@keyframes myrotate2{
	0% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
@-webkit-keyframes myrotate2{/* Safari and Chrome */
	0% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
@-moz-keyframes myrotate2 {	/* Firefox */
	0% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .4rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
@-o-keyframes myrotate2{ /* Opera */
	0% {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}    
	100% {
		position: fixed;
		top: -.46rem;
		left: 0;
		background-color: rgba(20, 30, 48, 0.6);
		width: 100%;
		height: .46rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: .25rem;
		padding-right: .25rem;
		z-index: 1;
	}
}
.bottomBox{
	.message{
		height: 4rem;
		position: relative;
		.background{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		.models{
			background: rgba(0,0,0,.76);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
		}
		.content{
			display:flex;
			z-index: 2;
			position: absolute;
			top: .3rem;
			left: 1.5rem;
			.left{
				width: 50%;
				.title{
					margin-bottom: .1rem;
					font-size: 24px;
					color: #fff;
				}
				.jian{
					width: 60%;
					margin-bottom: .4rem;
					font-size: 15px;
					line-height: .24rem;
					color: #fff;
				}
				.stat{
					margin-bottom: .1rem;
					font-size: 14px;
					color: #fff;
					span{
						color: #38A1F3;
					}
				}
			}
			.right{
				width: 50%;
				display:flex;
				flex-direction: column;
				align-items: center;
				.inputItem{
					margin-bottom: .14rem;
					border-radius: .03rem;
					display:flex;
					align-items: center;
					background: #fff;
					width: 3.6rem;
					height: .36rem;
					img{
						margin-left: .04rem;
						margin-right: .06rem;
						width: .22rem;
						height: .22rem;
					}
					input{
						outline: none;
						border: none;
						font-size: 14px;
						width: 3rem;
						height: .22rem; 
					}
				}
				.mess{
					margin-bottom: .1rem;
					padding: .05rem;
					outline: none;
					border: none;
					resize:none;
					border-radius: .03rem;
					font-size: 14px;
					background: #fff;
					width: 3.5rem;
					height: 1rem;
				}
				.but{
					width: 3.6rem;
					display:flex;
					justify-content:flex-end;
					.submit{
						border-radius:.05rem; 
						background: #38A1F3;
						width: 1rem;
						text-align: center;
						height: .32rem;
						line-height: .32rem;
						font-size: 14px;
						color: #fff;
					}
					.submit:hover{
						background: rgb(44,129,208);
					};
				}	
			}
		}
		.setting{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			text-align: center;
			height: .4rem;
			line-height:.4rem;
			font-size: 14px;
			color: #fff;
			z-index: 1;
		}
	}
}
</style>
<script>
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				selIndex: '',				//默认是首页
				username: "",				//用户名
				email: "",					//邮箱
				message: "",				//留言
				showTab: true,				//顶部导航栏
				infoObj:{},					//左下角内容
			}
		},
		mounted () {
			window.addEventListener('scroll', this.handleScroll)
		},
		created(){
			let seltab = sessionStorage.getItem("seltab");
			if(!!seltab){
				this.selIndex = seltab;
			}else{
				this.selIndex = "index";
			}
			//获取左下角所有数据
			this.getList();
		},
		watch:{
			selIndex:function(n){
				sessionStorage.setItem("seltab",n);
				window.scrollTo(0,0);
				this.$router.push('/' + n);
			}
		},
		methods:{
			//获取左下角所有数据
			getList(){
				resource.leftList().then(res => {
					this.$set(this.infoObj,'shareCount',res.data.data[0][0].shareCount);
					this.$set(this.infoObj,'noteCount',res.data.data[1][0].noteCount);
					this.$set(this.infoObj,'logCount',res.data.data[2][0].logCount);
					this.$set(this.infoObj,'browseCount',res.data.data[3][0].count);
					this.$set(this.infoObj,'comCount',res.data.data[4][0].comCount);
				});
			},
			//监听顶部导航动画
			handleScroll () {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop == 0){
					this.showTab = true;
				}else{
					this.showTab = false;
				}
			},
			//点击发送留言
			trans(){
				if(this.username == ""){
					this.$message({
						message: "请填写昵称哦～",
						type: 'warning'
					});
				}else if(!this.confirmationEmail.test(this.email)){
					this.$message({
						message: "请填写正确的邮箱哦～",
						type: 'warning'
					});
				}else if(this.message == ""){
					this.$message({
						message: "请填写您的留言哦～",
						type: 'warning'
					});
				}else{
					let obj = {
						username: this.username,
						email: this.email,
						content: this.message
					}
					//发表留言
					this.$confirm('请确认是有效的邮箱，博主可能通过邮箱回复您哦～', '提示', {
						confirmButtonText: '确认发表',
						cancelButtonText: '取消',
						type: 'success'
					}).then(() => {
						resource.addMessage(obj).then(res => {
							if(res.data.code == "0"){
								let userObj = {
									nickname: this.username,
									email:this.email
								}
								localStorage.setItem('userObj',JSON.stringify(userObj))
								this.username = "";				//用户名
								this.email = "";				//邮箱
								this.message = "";				//留言
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
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '取消发表'
						});          
					});
				}
			}
		}
	}
</script>





