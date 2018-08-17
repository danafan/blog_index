<template>
	<div>
		<div class="topBox">
			<div class="left">
				<div class="item" v-for="item in shereList" @click="getDetail(item.id)">
					<div class="icon"><img :src="baseUrl + item.pageimg"></div>
					<div class="txtBox">
						<div>
							<div class="title">{{item.title}}</div>
							<div class="subname">{{item.descs}}</div>
						</div>
						<div class="jia">
							<div class="time">发布时间：{{item.createdTime | updateTime}}</div>
							<div class="shou">
								<div class="yan">
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
			<div class="right">
				<!-- 点击排行 -->
				<div class="rank">
					<div class="title">
						<div class="line"></div>
						<div class="tie">点击排行</div>
						<div class="line"></div>
					</div>
					<div class="rankItem" v-for="item in sortList" @click="getDetail(item.id)">
						<img class="icons" :src="baseUrl + item.pageimg">
						<div class="miao">
							<div class="name">{{item.title}}</div>
							<div class="kan">
								<div class="yan">
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
				<!-- 本栏推荐 -->
				<div class="rank">
					<div class="title">
						<div class="line"></div>
						<div class="tie">本栏推荐</div>
						<div class="line"></div>
					</div>
					<div class="rankItem" v-for="item in recomList" @click="getDetail(item.id)">
						<img class="icons" :src="baseUrl + item.pageimg">
						<div class="miao">
							<div class="name">{{item.title}}</div>
							<div class="kan">
								<div class="yan">
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
	// 左侧列表
	.left{
		width: 65%;
		display:flex;
		flex-direction:column;
		align-items: center;
		.item{
			margin-bottom: .1rem;
			border: 1px solid #f4f4f4;
			border-radius: .08rem;
			width: 96%;
			display:flex;
			.icon{
				border-radius: .08rem 0 0 .08rem;
				width: 2.2rem;
				height: 1.4rem;
				overflow: hidden;
				img{
					border-radius: .08rem 0 0 .08rem;
					width: 100%;
					height: 100%;
					cursor: pointer;
					transition: all 0.4s;
				}
			}
			.txtBox{
				flex: 1;
				display:flex;
				flex-direction: column;
				justify-content:space-between;
				padding: .12rem;
				.title{
					width: 80%;
					margin-bottom: .1rem;
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
				}
				.subname{
					font-size: 14px;
					color: #333;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					
				}
				.jia{
					display:flex;
					justify-content:space-between;
					font-size: 13px;
					color: #666;
					.shou{
						display:flex;
						align-items: center;
						.yan{
							margin-right: .1rem;
							display:flex;
							align-items: center;
							img{
								margin-left: .04rem;
								width: .2rem;
								height: .18rem;
							}
						}
						.zan{
							display:flex;
							align-items: center;
							img{
								position: relative;
								top: -.02rem;
								margin-left: .04rem;
								width: .2rem;
								height: .18rem;
							}
						}
					}
				}
			}
		}
		.item:hover{
			box-shadow: -3px 3px 15px 0px rgba(170, 170, 170, 1);
			.icon{
				border-radius: .08rem 0 0 .08rem;
				width: 2.2rem;
				height: 1.4rem;
				overflow: hidden;
				img{
					cursor: pointer;
					transition: all 0.4s;
					transform: scale(1.1);	
				}
			}
		}
	}
	// 右侧
	.right{
		width: 30%;
		display:flex;
		flex-direction: column;
		align-items: center;
		// 模块
		.rank{
			margin-bottom: .2rem;
			border: 1px solid #f4f4f4;
			border-radius: .08rem;
			width: 86%;
			display:flex;
			flex-direction: column;
			align-items: center;
			padding: .1rem .1rem .2rem .1rem;
			box-shadow: -3px 3px 10px 0px rgba(170, 170, 170, 1);
			.title{
				margin-top: .1rem;
				margin-bottom: .1rem;
				display:flex;
				align-items: center;
				font-size: 16px;
				.tie{
					color: #38A1F3;
					margin-left: .2rem;
					margin-right: .2rem;
				}
				.line{
					border-bottom: 1px solid #f4f4f4;
					width: .6rem;
				}	
			}
			.rankItem{
				width: 90%;
				padding-top: .06rem;
				padding-bottom: .06rem;
				border-bottom: 1px solid #f4f4f4;
				display:flex;
				.icons{
					border-radius: .05rem;
					margin-right: .08rem;
					width: .82rem;
					height: .68rem;
				}
				.miao{
					flex:1;
					padding-top: .03rem;
					padding-bottom: .03rem;
					display:flex;
					flex-direction: column;
					justify-content:space-between;
					.name{
						font-size: 13px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.name:hover{
						color: #38A1F3;
					};
					.kan{
						font-size: 12px;
						display:flex;
						justify-content:flex-end;
						.yan,.zan{
							display:flex;
						}
						.yan{
							img{
								margin-left: .06rem;
								width: .16rem;
								height: .16rem;
							}
						}
						.zan{
							margin-left: .1rem;
							img{
								margin-left: .06rem;
								position: relative;
								top: -.02rem;
								width: .16rem;
								height: .16rem;
							}
						}
					}
				}
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
				total: 0,				//总条数
				page: 1,				//当前页码
				shereList:[],			//技术分享列表
				sortList:[],			//技术分享点击量排序
				recomList:[],			//技术分享本栏推荐
			}
		},
		created(){
			//获取技术分享列表
			this.getShareList();
			//技术分享点击排行  
			this.getSortList();
			//技术分享本栏推荐
			this.getRecomShare();
		},
		methods:{
			//获取技术分享列表
			getShareList(){
				resource.shareList({page:this.page}).then(res => {
					if(res.data.code == "0"){
						this.shereList = res.data.data;
						this.total = res.data.total;
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//技术分享点击排行  
			getSortList(){
				resource.shareSortList().then(res => {
					if(res.data.code == "0"){
						this.sortList = res.data.data;
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//技术分享本栏推荐
			getRecomShare(){
				resource.shareRecom().then(res => {
					if(res.data.code == "0"){
						this.recomList = res.data.data;
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
			//点击切换页码
			currentChange(e){
				this.page = e;
				//获取技术分享列表
				this.getShareList();
			}
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











