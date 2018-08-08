<template>
	<div>
		<div class="topBox">
			<div class="left">
				<div class="typeBox">
					<div class="title" :class="{'selTitle':seltab == '0'}" @click="seltab = '0'">原创</div>
					<div class="title" :class="{'selTitle':seltab == '1'}" @click="seltab = '1'">私密</div>
					<div class="title" :class="{'selTitle':seltab == '2'}" @click="seltab = '2'">照片墙</div>
				</div>
			</div>
			<div class="right">
				<!-- 原创和私密 -->
				<div class="listBox" v-if="seltab == 0 || seltab == 1">
					<div class="logItem">
						<div class="icon"><img src="../assets/0-0.jpg"></div>
						<div class="content">
							<div>
								<div class="title">我的博客之-阿里云服务的选择</div>
								<div class="desc">如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它，如果你无法简洁的表达你的想法，那只说明你还不够了解它。</div>
							</div>
							<div class="info">
								<div class="time">发表时间：2018-06-12</div>
								<div class="zhan">
									<div class="look">
										<div class="shu">23</div>
										<img src="../assets/eyes.png">
									</div>
									<div class="zan">
										<div class="shu">216</div>
										<img src="../assets/zan.png">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="logItem">
						<div class="icon"><img src="../assets/0-0.jpg"></div>
						<div class="content">
							<div>
								<div class="title">我的博客之-阿里云服务的选择</div>
								<div class="desc">如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它，如果你无法简洁的表达你的想法，那只说明你还不够了解它。</div>
							</div>
							<div class="info">
								<div class="time">发表时间：2018-06-12</div>
								<div class="zhan">
									<div class="look">
										<div class="shu">23</div>
										<img src="../assets/eyes.png">
									</div>
									<div class="zan">
										<div class="shu">216</div>
										<img src="../assets/zan.png">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="logItem">
						<div class="icon"><img src="../assets/0-0.jpg"></div>
						<div class="content">
							<div>
								<div class="title">我的博客之-阿里云服务的选择</div>
								<div class="desc">如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它，如果你无法简洁的表达你的想法，那只说明你还不够了解它。</div>
							</div>
							<div class="info">
								<div class="time">发表时间：2018-06-12</div>
								<div class="zhan">
									<div class="look">
										<div class="shu">23</div>
										<img src="../assets/eyes.png">
									</div>
									<div class="zan">
										<div class="shu">216</div>
										<img src="../assets/zan.png">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 照片墙 -->
				<div class="photoBox" v-else-if="seltab == 2">
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
			:page-count="totalPages"
			:pager-count="5"
			@current-change = "currentChange">
		</el-pagination>
	</div>
</div>
</template>
<style lang="less" scoped>
.topBox{
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
			height: 2.4rem;
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
				height: 2rem;
				width: 96%;
				display:flex;
				.icon{
					margin-right: .1rem;
					border-radius: .1rem;
					width: 2.6rem;
					height: 1.8rem;
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
					height: 1.8rem;
					padding-top: .12rem; 
					padding-bottom: .1rem; 
					display:flex;
					flex-direction: column;
					justify-content:space-between;
					flex: 1;
					.title{
						width: 100%;
						font-size: 18px;
						color: #333;
						font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.title:hover{
						color: #38A1F3;
					};
					.desc{
						margin-top: .1rem;
						width: 100%;
						font-size: 16px;
						color: #666;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
					}
					.desc:hover{
						color: #38A1F3;
					}
					.info{
						width: 100%;
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
	export default{
		data(){
			return{
				totalPages: 10,			//总页数
				page: 1,				//当前页码
				seltab:"0",
				
			}
		},
		methods:{
			//点击切换页码
			currentChange(){
				this.page = e;
				console.log(this.page);
			},
			
		}
	}
</script>