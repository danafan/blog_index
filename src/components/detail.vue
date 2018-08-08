<template>
	<div>
		<div class="box">
			<!-- 上面的文字 -->
			<div class="content">
				<!-- 顶部标题 -->
				<div class="topBox">
					<div class="title">我的博客之-阿里云服务的选择</div>
					<div class="jia">
						<div class="time">发布时间：2018-03-23</div>
						<div class="shou">
							<div class="yan">
								<div class="shu">12</div>
								<img src="../assets/eyes.png">
							</div>
							<div class="zan">
								<div class="shu">12</div>
								<img src="../assets/zan.png">
							</div>
						</div>
					</div>
				</div>
				<!-- 下面内容 -->
				<div class="textCon">
					那一世，你在这场缠绵的夜雨江南中为他悄悄的撑起那把泛青的油伞；我亦在烽台烛台望你千年之余，我曾听闻你为寻他走遍了千迢万里，踏过了雨雪绯林；而今离他只有那短短的一步之遥。看见你为了他在雨中温柔静候，那眼角滑落下的液体伴随着倾赋予他的漫天思念；静静的洒满这座城市的每一个角落。
					<img src="../assets/0-2.jpg">
					那一世，你在这场缠绵的夜雨江南中为他悄悄的撑起那把泛青的油伞；我亦在烽台烛台望你千年之余，我曾听闻你为寻他走遍了千迢万里，踏过了雨雪绯林；而今离他只有那短短的一步之遥。看见你为了他在雨中温柔静候，那眼角滑落下的液体伴随着倾赋予他的漫天思念；静静的洒满这座城市的每一个角落。
				</div>
			</div>
			<!-- 点赞 -->
			<div class="point">
				<div class="tabTxt">
					<div class="col"></div>
					<div class="txt">您的感受</div>
				</div>
				<div class="icons">
					<div class="iconItem">
						<img src="../assets/qq.png">
						<div class="count">(98)</div>
						<div class="desc">太棒啦</div>
					</div>
					<div class="iconItem">
						<img src="../assets/qq.png">
						<div class="count">(98)</div>
						<div class="desc">给个赞</div>
					</div>
					<div class="iconItem">
						<img src="../assets/qq.png">
						<div class="count">(98)</div>
						<div class="desc">很鄙视</div>
					</div>
				</div>
			</div>
			<!-- 评论 -->
			<div class="point">
				<div class="tabTxt">
					<div class="col"></div>
					<div class="txt">评论</div>
				</div>
				<textarea class="mess" placeholder="请输入评论内容。。。" v-model="message"></textarea>
				<div class="but">
					<div class="submit">发送</div>
				</div>
			</div>
			<!-- 最新评论 -->
			<div class="point">
				<div class="tabTxt">
					<div class="col"></div>
					<div class="txt">最新评论</div>
				</div>
				<div class="applist">
					<div class="appItem">
						<div class="user">
							<img src="../assets/0-1.jpg">
							<div class="username">热心的网友</div>
						</div>
						<div class="contenTxt">
							再打开记忆的栅栏，取一壶往昔，与流年对坐，情有多深，心就有多疼，触不到的可惜，在挥手袖的风里滋养着忧伤，捻一缕清芬，看三千浮华，历历往事，素淡清雅，研一池墨香，植于眉心，相遇如梦，一直充满虔诚的无暇，这个十月，我用满怀的深情，打开文字的苍白，灵动的心事，穿过岁月的轩窗，迎面而来，我未曾离开，为何不见了原来这世间的繁华与葱笼
						</div>
						<div class="info">
							<div class="time">评论时间：2018-03-23</div>
							<div class="zan">
								<div class="shu">12</div>
								<img src="../assets/zan.png">
							</div>
						</div>
					</div>
					<div class="appItem">
						<div class="user">
							<img src="../assets/0-1.jpg">
							<div class="username">热心的网友</div>
						</div>
						<div class="contenTxt">
							再打开记忆的栅栏，取一壶往昔，与流年对坐，情有多深，心就有多疼，触不到的可惜，在挥手袖的风里滋养着忧伤，捻一缕清芬，看三千浮华，历历往事，素淡清雅，研一池墨香，植于眉心，相遇如梦，一直充满虔诚的无暇，这个十月，我用满怀的深情，打开文字的苍白，灵动的心事，穿过岁月的轩窗，迎面而来，我未曾离开，为何不见了原来这世间的繁华与葱笼
						</div>
						<div class="info">
							<div class="time">评论时间：2018-03-23</div>
							<div class="zan">
								<div class="shu">12</div>
								<img src="../assets/zan.png">
							</div>
						</div>
					</div>
					<div class="appItem">
						<div class="user">
							<img src="../assets/0-1.jpg">
							<div class="username">热心的网友</div>
						</div>
						<div class="contenTxt">
							再打开记忆的栅栏，取一壶往昔，与流年对坐，情有多深，心就有多疼，触不到的可惜，在挥手袖的风里滋养着忧伤，捻一缕清芬，看三千浮华，历历往事，素淡清雅，研一池墨香，植于眉心，相遇如梦，一直充满虔诚的无暇，这个十月，我用满怀的深情，打开文字的苍白，灵动的心事，穿过岁月的轩窗，迎面而来，我未曾离开，为何不见了原来这世间的繁华与葱笼
						</div>
						<div class="info">
							<div class="time">评论时间：2018-03-23</div>
							<div class="zan">
								<div class="shu">12</div>
								<img src="../assets/zan.png">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.box{
	border: 1px solid #f4f4f4;
	margin: .8rem auto .4rem;
	width: 70%;
	// 上面的文字
	.content{
		.topBox{
			width: 100%;
			background: #F9F9F9;
			padding: .1rem .2rem;
			.title{
				margin-bottom: .1rem;
				width: 50%;
				font-weight: bold;
				font-size: 18px;
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
		.textCon{
			padding: .2rem;
			width: 100%;
			font-size: 14px;
			img{
				width: 100%;
			}
		}
	}
	//点赞
	.point{
		padding:.2rem;
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
		.icons{
			margin-top: .2rem;
			display:flex;
			justify-content:space-around;
			.iconItem{
				display:flex;
				flex-direction: column;
				align-items: center;
				img{
					width: .5rem;
					height: .56rem;
				}
				.count{
					font-size: 14px;
					color: #38A1F3;
				}
				.desc{
					font-size: 16px;
					color: #333;
					font-weight: bold;
				}
			}
		}
		.mess{
			margin-top: .2rem;
			border-radius:.08rem;
			border:1px solid #999; 
			width: 100%;
			height: 1.4rem;
			font-size: 15px;
			padding: .1rem;
			outline: none;
			resize:none;
		}
		.but{
			width: 100%;
			display:flex;
			justify-content:flex-end;
			.submit{
				border-radius:.05rem; 
				background: #38A1F3;
				width: 1.2rem;
				text-align: center;
				height: .4rem;
				line-height: .4rem;
				font-size: 16px;
				color: #fff;
			}
		}
		.applist{
			margin-top: .2rem;
			.appItem{
				margin-bottom: .2rem;
				border-bottom: 1px solid #f4f4f4;
				padding-bottom: .1rem;
				.user{
					display:flex;
					align-items: center;
					img{
						margin-right: .1rem;
						border-radius: 50%;
						width: .4rem;
						height: .4rem;
					}
					.username{
						font-size: 15px;
						font-weight: bold;
						color: #333;
					}
				}
				.contenTxt{
					margin-left: .5rem;
					font-size: 13px;
					color: #333;
				}
				.info{
					margin-top: .1rem;
					display:flex;
					justify-content:flex-end;
					align-items: center;
					font-size: 13px;
					color: #666;
					.zan{
						margin-left: .2rem;
						display:flex;
						align-items: center;
						img{
							margin-left: .03rem;
							position: relative;
							top: -.03rem;
							width: .2rem;
							height: .2rem;
						}
					}
				}
			}
		}
	}
}
</style>
<script>
	export default{
		data(){
			return{
				message:"",
			}
		}
	}
</script>