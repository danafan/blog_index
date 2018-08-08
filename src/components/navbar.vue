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
				<div class="left">
					<div class="title">博客简介</div>
					<div class="jian">如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。</div>
					<div class="stat">日志总数 <span>128</span></div>
					<div class="stat">当前在线 <span>16</span></div>
					<div class="stat">总浏览量 <span>1024</span></div>
					<div class="stat">最后更新 <span>2018 - 04 - 24</span></div>
					<div class="stat">网友留言 <span>106</span></div>
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
					<textarea class="mess" placeholder="请输入留言" v-model="message"></textarea>
					<div class="but">
						<div class="submit">发送</div>
					</div>
				</div>
			</div>
			<div class="setting">© 2015 - 2018 All Rights Reserved Acirno | Theme by  Tinection. 
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.tabBox{
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
	.left{
		width: .44rem;
		height: .26rem;
	}
	.right{
		display:flex;
		font-size: 16px;
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
	background-color: rgba(20, 30, 48, 0.6);
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
		font-size: 16px;
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
		padding: .3rem .3rem .3rem .8rem;
		background-color: rgba(20, 30, 48, 0.96);
		display:flex;
		.left{
			width: 50%;
			.title{
				margin-bottom: .1rem;
				font-size: 26px;
				color: #fff;
			}
			.jian{
				width: 60%;
				margin-bottom: .4rem;
				font-size: 14px;
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
					width: .24rem;
					height: .24rem;
				}
				input{
					outline: none;
					border: none;
					font-size: 14px;
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
					font-size: 16px;
					color: #fff;
				}
			}	
		}
	}
	.setting{
		background: #141E30;
		width: 100%;
		text-align: center;
		height: .4rem;
		line-height:.4rem;
		font-size: 14px;
		color: #fff;
	}
}
</style>
<script>
	export default{
		data(){
			return{
				selIndex: 'index',			//默认是首页
				username: "",				//用户名
				email: "",					//邮箱
				message: "",				//留言
				showTab: true,
			}
		},
		mounted () {
			window.addEventListener('scroll', this.handleScroll)
		},
		created(){
			this.$router.push('/index');
		},
		watch:{
			selIndex:function(n){
				window.scrollTo(0,0);
				this.$router.push('/' + n);
			}
		},
		methods:{
			handleScroll () {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop == 0){
					this.showTab = true;
				}else{
					this.showTab = false;
				}
			},
		}
	}
</script>





