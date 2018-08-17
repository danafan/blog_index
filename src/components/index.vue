<template>
	<div>
		<!-- 大背景图 -->
		<img class="backImg" :src="backimg">
		<div class="years">
			<div class="item" v-for="item in years">{{item}}</div>
		</div>
		<div class="monthBox">
			<div class="month">{{month}}</div>
			<div class="xie"></div>
			<div class="day">{{day}}</div>
		</div>
		<div class="week">{{week}}</div>
		<div class="times">{{time}}</div>
		<div class="content">
			<!-- 左侧 -->
			<div class="left">
				<!-- 上面两个推荐文章 -->
				<div class="recomm">
					<div class="recommItem" v-for="item in indexList" @click="getDetail(item.id)">
						<div class="icon"><img :src="baseUrl + item.pageimg"></div>
						<div class="sun">
							<div class="title">{{item.title}}</div>
							<div class="info">
								<div class="time">发表时间:{{item.createdTime | updateTime}}</div>
								<div class="zhan">
									<div class="look">
										<div class="shu">{{item.browse}}</div>
										<img src="../assets/eyes.png">
									</div>
									<div class="zan">
										<div class="shu">{{item.point}}</div>
										<img src="../assets/zan.png">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 下面名言 -->
				<div class="saying">
					<div class="sayItem1">
						<div class="line"></div>
						<div class="txt">滴水穿石</div>
						<div class="line"></div>
					</div>
					<div class="sayItem2">
						<div class="txt">非力使然</div>
						<div class="line"></div>
					</div>
					<div class="sayItem3">
						<div class="line"></div>
						<div class="txt">恒也</div>
					</div>
				</div>
			</div>
			<!-- 右侧 -->
			<div class="right">
				<div class="userinfo">
					<div class="userImg"><img src="../assets/0-0.jpg"></div>
					<div class="username">范玉龙</div>
					<div class="qian">以中庸之道处世 以逍遥之道处心</div>
					<div class="txt">
						<div class="jie">网名：<span>Randol</span></div>
						<div class="jie">职业：<span>web前端开发工程师</span></div>
						<div class="jie">籍贯：<span>浙江省-杭州市</span></div>
						<div class="jie">邮箱：<span>13067882143@163.com</span></div>
					</div>
					<div class="imgs">
						<img class="wechat" src="../assets/weixin.png">
						<img class="qq" src="../assets/qq.png">
						<img class="wei" src="../assets/weibo.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.backImg{
	display:block;
	width: 100%;
	height: 100%;
}
.years{
	position: absolute;
	top: 1.4rem;
	left: 1rem;
	width: 1rem;
	height: 1.4rem;
	display:flex;
	flex-wrap:wrap;
	font-size: 52px; 
	color: #fff;
	.item{
		width: 50%;
		text-align: center;
		height: 50%;
		line-height: 50%;
	}
	animation:.5s ease 0s myrotate ;
	-webkit-animation:.5s ease 0s myrotate;  
	-moz-animation:.5s ease 0s myrotate;
	-o-animation:.5s ease 0s myrotate;
}
@keyframes myrotate{
	0% {
		width: 1rem;
		height: 1.4rem;
	}    
	100% {
		transform: scale(1.4);
	}
}
@-webkit-keyframes myrotate{/* Safari and Chrome */
	0% {
		width: 1rem;
		height: 1.4rem;
	}    
	100% {
		transform: scale(1.4);
	}
}
@-moz-keyframes myrotate{	/* Firefox */
	0% {
		width: 1rem;
		height: 1.4rem;
	}    
	100% {
		transform: scale(1.4);
	}
}
@-o-keyframes myrotate{ /* Opera */
	0% {
		width: 1rem;
		height: 1.4rem;
	}    
	100% {
		transform: scale(1.4);
	}
}
.monthBox{
	border: 2px solid #fff;
	position: absolute;
	top: 3.3rem;
	left: 1rem;
	width: 1rem;
	font-size: 50px;
	display:flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	transform-origin:0% 0%;
	// transform: rotate(-40deg);
	animation:1.8s ease 0.8s myrotate2 ;
	-webkit-animation:1.8s ease 0.8s myrotate2;  
	-moz-animation:1.8s ease 0.8s myrotate2;
	-o-animation:1.8s ease 0.8s myrotate2;
	.xie{
		margin-top: .1rem;
		margin-bottom: .1rem;
		height: 1px;
		width: .6rem;
		border-bottom: 1px solid #fff;
		transform: rotate(-25deg);
	}
}
@keyframes myrotate2{
	0% {
		transform: rotate(0deg);
	}    
	25% {
		transform: rotate(30deg);
	} 
	50% {
		transform: rotate(-5deg);
	} 
	75% {
		transform: rotate(5deg);
	}  
	100% {
		transform: rotate(0deg);
	}
}
@-webkit-keyframes myrotate2{/* Safari and Chrome */
	0% {
		transform: rotate(-40deg);
	}    
	25% {
		transform: rotate(40deg);
	} 
	50% {
		transform: rotate(-20deg);
	} 
	75% {
		transform: rotate(20deg);
	}  
	100% {
		transform: rotate(0deg);
	}
}
@-moz-keyframes myrotate2 {	/* Firefox */
	0% {
		transform: rotate(-40deg);
	}    
	25% {
		transform: rotate(40deg);
	} 
	50% {
		transform: rotate(-20deg);
	} 
	75% {
		transform: rotate(20deg);
	}  
	100% {
		transform: rotate(0deg);
	}
}
@-o-keyframes myrotate2{ /* Opera */
	0% {
		transform: rotate(-40deg);
	}    
	25% {
		transform: rotate(40deg);
	} 
	50% {
		transform: rotate(-20deg);
	} 
	75% {
		transform: rotate(20deg);
	}  
	100% {
		transform: rotate(0deg);
	}
}
.week{
	position: absolute;
	top: 5.7rem;
	left: .6rem;
	color: #fff;
	font-size: 48px;
	font-weight: bold;
}
.times{
	box-shadow: 0px 0px 29px 8px rgba(20, 30, 48, 0.6);
	border-radius: .2rem;
	position: absolute;
	top: 1.2rem;
	right: 1rem;
	width: 3.4rem;
	text-align:center;
	height: 1rem;
	line-height: 1rem;
	font-size: 52px; 
	color: #fff;
}
.content{
	display:flex;
	margin: .2rem auto;
	width: 70%;
	.left{
		width: 60%;
		.recomm{
			display:flex;
			justify-content:space-between;
			.recommItem{
				border-radius: .08rem;
				width: 2.8rem;
				height: 3.6rem;
				box-shadow: -3px 6px 15px 0px rgba(170, 170, 170, 1);
				display: flex;
				flex-direction: column;
				.icon{
					border-radius: .08rem .08rem 0 0;
					display:block;
					width: 2.8rem;
					height: 2.6rem;
					overflow: hidden;
					img{
						border-radius: .08rem .08rem 0 0;
						width: 100%;
						height: 100%;
						cursor: pointer;
						transition: all 0.6s;
					}
					img:hover{
						transform: scale(1.1);
					}
				}
				.sun{
					width: 100%;
					display:flex;
					flex-direction:column;
					justify-content:space-between;
					flex:1;
					padding: .08rem;
					.title{
						font-weight:bold;
						font-size: 16px;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.title:hover{
						color: #38A1F3;
					};
					.info{
						width: 100%;
						padding-left: .02rem;
						padding-right: .02rem;
						font-size: 14px;
						color: #666;
						display:flex;
						justify-content: space-between;
						align-items: center;
						.zhan{
							display:flex;
							align-items: center;
							.look{
								display:flex;
								align-items: center;
								img{
									margin-left: .04rem;
									width: .18rem;
									height: .18rem;
								}
							}
							.zan{
								margin-left: .1rem;
								display:flex;
								align-items: center;
								img{
									position: relative;
									top: -.03rem;
									margin-left: .04rem;
									width: .18rem;
									height: .18rem;
								}
							}
						}

					}
				}	
			}
		}
		.saying{
			margin-top: .48rem;
			.line{
				width: .8rem;
				border-bottom: 1px solid #999;
			}
			.sayItem1{
				margin-bottom: .2rem;
				display:flex;
				align-items: center;
				color: #666;
				.txt{
					font-size: 28px;
					margin-right: .3rem;
					margin-left: .3rem;
					cursor: pointer;
					transition: all 0.4s;
				}
			}
			.sayItem2{
				padding-left: 1.6rem;
				margin-bottom: .2rem;
				display:flex;
				align-items: center;
				color: #666;
				.txt{
					font-size: 24px;
					margin-right: .3rem;
					margin-left: .3rem;
					cursor: pointer;
					transition: all 0.4s;
				}
			}
			.sayItem3{
				padding-left: 1.8rem;
				display:flex;
				align-items: center;
				color: #666;
				.txt{
					font-size: 28px;
					margin-right: .3rem;
					margin-left: .3rem;
					cursor: pointer;
					transition: all 0.4s;
				}
			}
		}
	}
	.right{
		width: 40%;
		display:flex;
		justify-content:flex-end;
		.userinfo{
			position: relative;
			border-radius: .08rem;
			width: 3.2rem;
			height: 4.8rem;
			box-shadow: -3px 3px 15px 0px rgba(170, 170, 170, 1);
			.userImg{
				position: absolute;
				top: .2rem;
				left: 50%;
				transform: translate(-50%);
				border-radius: 50%;
				width: 1.5rem;
				height: 1.5rem;
				overflow: hidden;
				transition: all 0.2s;
				img{
					width: 100%;
					height: 100%;
					cursor: pointer;
					transition: all 0.2s;
				}
				img:hover{
					transform: scale(1.1);	
				}
			}
			.userImg:hover{
				box-shadow: -3px 3px 8px 0px rgba(170, 170, 170, 1);
			}
			.username{
				position: absolute;
				top: 1.9rem;
				left: 50%;
				transform: translate(-50%);
				font-size: 24px;
				font-weight: bold;
				color: #333;
			}
			.qian{
				width: 100%;
				text-align: center;
				position: absolute;
				top: 2.3rem;
				left: 0;
				font-size: 16px;
				color: #666;
			}
			.txt{
				padding-left: .26rem;
				width: 100%;
				position: absolute;
				top: 2.6rem;
				left: 0;
				font-size: 16px;
				color: #333;
				.jie{
					margin-bottom: .1rem;
					span{
						font-weight: bold;
					}
				}
			}
			.imgs{
				position: absolute;
				bottom: .2rem;
				left:0;
				width: 100%;
				display:flex;
				justify-content:space-around;
				.wechat{
					position: relative;
					top: .06rem;
					width: .44rem;
					height: .34rem;
				}
				.qq{
					width: .42rem;
					height: .42rem;
				}
				.wei{
					width: .42rem;
					height: .42rem;
				}
			}
		}
	}
}
</style>
<script>
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				years:[],		//年份数组（每一个数字）
				month: "",		//月
				day:"",			//日
				week: "",		//周几
				time: "",		//时间
				backimg:"",		//背景图
				indexList:[],	//推荐文章列表
			}
		},
		created(){
			var that = this;
			//动态时钟
			setInterval(function(){
				that.getDate();
			},1000);
			//当前时间
			var myDates = new Date();				
			//年份
			var year = myDates.getFullYear();		
			this.years = year.toString().split("");
			//月份
			this.month = (myDates.getMonth()+1 < 10 ? '0'+(myDates.getMonth()+1) : myDates.getMonth()+1);
			//星期(0-6,0代表星期天)
			this.day = (myDates.getDate() < 10 ? '0'+(myDates.getDate()) : myDates.getDate());
			let count = myDates.getDay(); 			
			// 动态背景图
			this.backimg = require('../assets/' + count + ".jpg");
			switch (count){
				case 0:
				this.week = "Sunday";
				break;
				case 1:
				this.week = "Monday";
				break;
				case 2:
				this.week = "Tuesday";
				break;
				case 3:
				this.week = "Wednesday";
				break;
				case 4:
				this.week = "Thursday";
				break;
				case 5:
				this.week = "Friday";
				break;
				case 6:
				this.week = "Saturday";
				break;
			};
			//获取两个推荐文章
			this.getIndex();
		},
		methods:{
			//获取两个推荐文章
			getIndex(){
				resource.getIndexList().then(res => {
					if(res.data.code == "0"){
						this.indexList = res.data.data;
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//获取技术分享详情
			getDetail(id){
				this.$router.push('/detail?type=0&id=' + id);
			},	
			//动态时钟
			getDate(){
				var myDate = new Date();//获取系统当前时间
				var hours = (myDate.getHours() < 10 ? '0'+(myDate.getHours()) : myDate.getHours());
 				var minute = (myDate.getMinutes() < 10 ? '0'+(myDate.getMinutes()) : myDate.getMinutes()); //获取当前分钟数(0-59)
				var second = (myDate.getSeconds() < 10 ? '0'+(myDate.getSeconds()) : myDate.getSeconds()); //获取当前秒数(0-59)
				this.time = hours + ": " + minute + ": " + second;
			}
			
		},
		filters:{
			updateTime(time){
				let times = parseInt(time);
				var time = new Date(times);
				var y = time.getFullYear();
				var m = (time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1);
				var d = (time.getDate() < 10 ? '0'+(time.getDate()) : time.getDate());
				return y+'-'+m+'-'+d;
			}
		}
	}
</script>





















