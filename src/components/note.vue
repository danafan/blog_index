<template>
	<div>
		<div class="topBox">
			<div class="left">
				<div class="bookItem" v-for="(item,index) in books" @mouseenter="dataDetails(index)" @mouseleave="hiddenDetail(index)">
					<div class="name">{{item.name}}</div>
					<div class="author">{{item.author}}</div>
					<div class="synopsis" v-if="item.default == true">{{item.synopsis}}</div>
				</div>
			</div>
			<div class="right">
				<!-- 最近在读 -->
				<div class="rank">
					<div class="title">
						<div class="line"></div>
						<div class="tie">最近在读</div>
						<div class="line"></div>
					</div>
					<div class="rankItem">
						<img class="icons" src="../assets/0-2.jpg">
						<div class="miao">
							<div>
								<div class="name">资本的游戏</div>
								<div class="Author">房西苑</div>
							</div>
							<div class="kan">
								《资本的游戏》是一本从头到尾都是在用中国式的语言对资本运营
							</div>
						</div>
					</div>
					<div class="rankItem">
						<img class="icons" src="../assets/0-2.jpg">
						<div class="miao">
							<div>
								<div class="name">资本的游戏</div>
								<div class="Author">房西苑</div>
							</div>
							<div class="kan">
								《资本的游戏》是一本从头到尾都是在用中国式的语言对资本运营
							</div>
						</div>
					</div>
					<div class="rankItem">
						<img class="icons" src="../assets/0-2.jpg">
						<div class="miao">
							<div>
								<div class="name">资本的游戏</div>
								<div class="Author">房西苑</div>
							</div>
							<div class="kan">
								《资本的游戏》是一本从头到尾都是在用中国式的语言对资本运营
							</div>
						</div>
					</div>
					<div class="rankItem">
						<img class="icons" src="../assets/0-2.jpg">
						<div class="miao">
							<div>
								<div class="name">资本的游戏</div>
								<div class="Author">房西苑</div>
							</div>
							<div class="kan">
								《资本的游戏》是一本从头到尾都是在用中国式的语言对资本运营
							</div>
						</div>
					</div>
					<div class="rankItem">
						<img class="icons" src="../assets/0-2.jpg">
						<div class="miao">
							<div>
								<div class="name">资本的游戏</div>
								<div class="Author">房西苑</div>
							</div>
							<div class="kan">
								《资本的游戏》是一本从头到尾都是在用中国式的语言对资本运营
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
	// 左侧列表
	.left{
		width: 65%;
		display:flex;
		flex-wrap: wrap;
		align-content:flex-start;
		.bookItem{
			position: relative;
			margin-right: .37rem;
			margin-bottom: .4rem;
			box-shadow: 3px 3px 6px 0px rgba(213, 193, 132, .6);
			border-radius: .03rem .08rem .08rem .03rem;
			padding-top: .14rem;
			background: #D5C184;
			width: 1.8rem;
			height: 2.2rem;
			.name{
				width: 100%;
				text-align: center;
				font-weight: bold;
				color: #333;
				font-size: 16px;
			}
			.author{
				margin-top: .1rem;
				width: 100%;
				text-align: center;
				color: #333;
				font-size: 14px;
			}
			.synopsis{
				border-radius: 0 0 .08rem .03rem;
				background: rgba(0,0,0,.6);
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				font-size: 13px;
				color: #fff;
				padding:.06rem;
				animation:.2s linear 0s myrotate ;
				-webkit-animation:.2s linear 0s myrotate;/* Safari and Chrome */
				-moz-animation:.2s linear 0s myrotate;
				-o-animation:.2s linear 0s myrotate;
			}
			@keyframes myrotate{
				0% {
					height: 0;
				}    
				100% {
					height: 1rem;
				}
			}
			@-webkit-keyframes myrotate{/* Safari and Chrome */
				0% {
					height: 0;
				}    
				100% {
					height: 1rem;
				}
			}
			@-moz-keyframes myrotate {	/* Firefox */
				0% {
					height: 0;
				}    
				100% {
					height: 1rem;
				}
			}

			@-o-keyframes myrotate{ /* Opera */
				0% {
					height: 0;
				}    
				100% {
					height: 1rem;
				}
			}
		}
	}
	// 右侧
	.right{
		width: 35%;
		display:flex;
		flex-direction: column;
		align-items: center;
		// 模块
		.rank{
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
					border-radius: .03rem;
					margin-right: .08rem;
					width: .82rem;
					height: 1rem;
				}
				.miao{
					flex:1;
					padding-top: .03rem;
					padding-bottom: .03rem;
					display:flex;
					flex-direction: column;
					justify-content:space-between;
					.name{
						font-weight: bold;
						color: #333;
						font-size: 14px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.name:hover{
						color: #38A1F3;
					};
					.Author{
						margin-top: .06rem;
						font-size: 12px;
					}
					.kan{
						font-size: 12px;
						color: #666;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
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
	export default{
		data(){
			return{
				totalPages: 10,			//总页数
				page: 1,				//当前页码
				books:[{"name":"资本的游戏","author":"哈哈","synopsis":"简介：如果你无法简洁的表达你的想法如果你无法简洁的表达你的想法开始绝代风华深刻的","default":false},
				{"name":"从0到1","author":"哈哈","synopsis":"简介：如果你无法简洁的表达你的想法如果你无法简洁的表达你的想法开始绝代风华深刻的","default":false},
				{"name":"从0到1","author":"哈哈","synopsis":"简介：如果你无法简洁的表达你的想法如果你无法简洁的表达你的想法开始绝代风华深刻的","default":false},
				{"name":"从0到1","author":"哈哈","synopsis":"简介：如果你无法简洁的表达你的想法如果你无法简洁的表达你的想法开始绝代风华深刻的","default":false},
				{"name":"从0到1","author":"哈哈","synopsis":"简介：如果你无法简洁的表达你的想法如果你无法简洁的表达你的想法开始绝代风华深刻的","default":false}
				]
			}
		},
		methods:{
			//点击切换页码
			currentChange(){
				this.page = e;
				console.log(this.page);
			},
			//鼠标移入事件
			dataDetails(index){
				this.books[index].default = true;
			},
			//鼠标移除事件
			hiddenDetail(index){
				this.books[index].default = false;
			}
		}
	}
</script>















