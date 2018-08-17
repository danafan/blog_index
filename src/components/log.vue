<template>
	<div>
		<div class="topBox">
			<div class="left">
				<div class="typeBox">
					<div class="title" :class="{'selTitle':seltab == '0'}" @click="seltab = '0'">原创</div>
					<!-- <div class="title" :class="{'selTitle':seltab == '1'}" @click="seltab = '1'">照片墙</div> -->
					<div class="title" :class="{'selTitle':seltab == '1'}" @click="photo">照片墙</div>
				</div>
			</div>
			<div class="right">
				<!-- 原创 -->
				<div class="listBox" v-if="seltab == 0">
					<div class="logItem" v-for="item in logList" @click="getDetail(item.id)">
						<div class="icon"><img :src="baseUrl + item.pageimg"></div>
						<div class="content">
							<div>
								<div class="title">{{item.title}}</div>
								<div class="desc">{{item.descs}}</div>
							</div>
							<div class="info">
								<div class="time">发表时间：{{item.createdTime | updateTime}}</div>
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
				<!-- 照片墙 -->
				<div class="photoBox" v-else-if="seltab == 1">
					<div class="imgBox">
						<img src="../assets/0-0.jpg">
					</div>
					<div class="imgBox">
						<img src="../assets/0-1.jpg">
					</div>
					<div class="imgBox">
						<img src="../assets/0-0.jpg">
					</div>
				</div>
			</div>
		</div>
		<div class="pages">
			<el-pagination
			background
			layout="prev, pager, next"
			:total="total"
			:pager-count="5"
			:page-size="5"
			@current-change = "currentChange">
		</el-pagination>
	</div>
</div>
</template>
<style lang="less" scoped>
.topBox{
	min-height:6rem;
	margin: .8rem auto .2rem;
	width: 70%;
	display:flex;
	.left{
		width: 18%;
		.typeBox{
			border-radius: .08rem;
			background-color: rgba(20, 30, 48, 0.96);
			box-shadow: 3px 3px 6px 0px rgba(20, 30, 48, .6);
			width: 95%;
			height: 2rem;
			display:flex;
			flex-direction: column;
			justify-content:space-around;
			.title{
				width: 100%;
				text-align: center;
				font-size: 16px;
				color: #fff;
			}
			.title:hover{
				color: #38A1F3;
			}
			.selTitle{
				color: #38A1F3;
			}
		}
	}
	.right{
		width: 82%;
		// 原创和私密
		.listBox{
			margin: 0 auto;
			width: 98%;
			border: 1px solid #f4f4f4;
			border-radius: .08rem;
			display:flex;
			flex-direction: column;
			align-items: center;
			padding-top: .2rem;
			padding-bottom: .2rem;
			// 某一条
			.logItem{
				margin-bottom: .2rem;
				border-bottom: 1px solid #f4f4f4;
				height: 1.6rem;
				width: 96%;
				display:flex;
				.icon{
					margin-right: .1rem;
					border-radius: .1rem;
					width: 2.2rem;
					height: 1.4rem;
					overflow: hidden;
					img{
						border-radius: .1rem;
						width: 100%;
						height: 100%;
						cursor: pointer;
						transition: all 0.6s;
					}
					img:hover{
						transform: scale(1.1);
					}
				}
				.content{
					height: 1.4rem;
					padding-top: .12rem; 
					padding-bottom: .1rem; 
					display:flex;
					flex-direction: column;
					justify-content:space-between;
					flex: 1;
					.title{
						width: 80%;
						font-size: 16px;
						color: #333;
						font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
					.title:hover{
						color: #38A1F3;
					};
					.desc{
						margin-top: .1rem;
						width: 100%;
						font-size: 14px;
						color: #666;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.desc:hover{
						color: #38A1F3;
					}
					.info{
						width: 100%;
						font-size: 13px;
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
									width: .2rem;
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
									width: .2rem;
									height: .18rem;
								}
							}
						}
					}
				}
			}
		}
		//照片墙
		.photoBox{
			margin: 0 auto;
			width: 98%;
			border: 1px solid #f4f4f4;
			border-radius: .08rem;
			display:flex;
			flex-wrap: wrap;
			align-content:flex-start;
			padding: .2rem;
			.imgBox{
				margin-right: .3rem;
				box-shadow: -3px 3px 8px 0px rgba(170, 170, 170, 1);
				border-radius: .05rem;
				margin-bottom: .2rem;
				width: 3.4rem;
				height: 2.6rem;
				overflow: hidden;
				img{
					border-radius: .05rem;
					display:block;
					width:100%;
					height: 100%;
					cursor: pointer;
					transition: all 0.4s;
				}
				img:hover{
					transform: scale(1.1);
				};
			}
		}
	}
}
.pages{
	display:flex;
	align-items: center;
	justify-content:center;
	margin: 0 auto;
	width: 70%;
}
</style>
<script>
	import resource from '../api/resource.js'
	export default{
		data(){
			return{
				total:0,				//总条数
				page: 1,				//当前页码
				seltab:"0",				//默认选中原创
				logList:[],				//日志列表
				
			}
		},
		created(){
			//获取我的日志列表
			this.getLogList();
		},
		methods:{
			//获取我的日志列表
			getLogList(){
				resource.logList({page:this.page}).then(res => {
					if(res.data.code == "0"){
						this.logList = res.data.data;
						this.total = res.data.total;
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
				this.$router.push('/detail?type=2&id=' + id);
			},
			//点击照片墙
			photo(){
				this.$message({
					message: '博主正在为您准备精美的照片哦 ^_^',
					type: 'success'
				});
			},
			//点击切换页码
			currentChange(e){
				this.page = e;
				//获取我的日志列表
				this.getLogList();
			},
			
		},
		filters:{
			updateTime(time){
				let times = parseInt(time);
				var time = new Date(times);
				var y = time.getFullYear();
				var m = time.getMonth()+1;
				var d = time.getDate();
				var h = time.getHours();
				var mm = time.getMinutes();
				var s = time.getSeconds();
				return y+'-'+m+'-'+d;
			}
		}
	}
</script>