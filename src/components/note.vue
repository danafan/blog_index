<template>
	<div>
		<div class="topBox">
			<div class="left">
				<div class="bookItem" v-for="(item,index) in books" @mouseenter="dataDetails(index)" @mouseleave="hiddenDetail(index)" @click="getDetail(item.id)">
					<div class="name">{{item.title}}</div>
					<div class="author">{{item.author}}</div>
					<div class="synopsis" v-if="item.default == true">{{item.descs}}</div>
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
					<div class="rankItem" v-for="item in readingList" @click="location(item.url)">
						<img class="icons" :src="baseUrl + item.pageimg">
						<div class="miao">
							<div>
								<div class="name">{{item.name}}</div>
								<div class="Author">{{item.author}}</div>
							</div>
							<div class="kan">{{item.descs}}</div>
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
			:page-size="6"
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
			}
		}
		.bookItem:hover{
			transform: scale(1.05);
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
			width: 90%;
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
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
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
			.rankItem:hover{
				.miao .name{
					color: #38A1F3;
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
				books:[],				//读书笔记列表
				readingList:[],			//最近在读列表
			}
		},
		created(){
			//获取读书笔记列表
			this.geNoteList();
			//获取最近在读列表
			this.getReading();
		},
		methods:{
			//获取读书笔记列表
			geNoteList(){
				resource.noteList({page:this.page}).then(res => {
					if(res.data.code == "0"){
						this.books = res.data.data;
						this.total = res.data.total;
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//获取最近在读列表
			getReading(){
				resource.getReadList().then(res => {
					if(res.data.code == "0"){
						this.readingList = res.data.data;
					}else{
						this.$message({
							message: res.data.msg,
							type: 'error'
						});
					}
				});
			},
			//点击最近在读跳转链接
			location(url){
				window.open(url);
			},
			//获取读书笔记详情
			getDetail(id){
				this.$router.push('/detail?type=1&id=' + id);
			},	
			//点击切换页码
			currentChange(e){
				this.page = e;
				//获取读书笔记列表
				this.geNoteList();
			},
			//鼠标移入事件
			dataDetails(index){
				this.$set(this.books[index],'default',true);
			},
			//鼠标移除事件
			hiddenDetail(index){
				this.books[index].default = false;
			}
		}
	}
</script>















