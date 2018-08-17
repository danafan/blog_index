<template>
	<div>
		<div class="childItem">
			<div class="childuser">
				<img src="../assets/0-1.jpg">
				<div class="childbiao">
					<div class="childusername">
						<div class="ns">{{obj.username}}</div>
						<div class="hui">回复</div>
						<div class="ns">{{obj.pname}}</div>
						<span>{{obj.createdTime | updateTime}}</span>
					</div>
				</div>
			</div>
			<div class="childcontenTxt">{{obj.content}}</div>
			<div class="childinfo" :class="{'selChildreply':obj.zhan == true}">
				<div class="childreply" @click="reback(obj)">{{obj.zhan == true?'取消回复':'回复'}}</div>
			</div>
			<div class="replyItem" v-if="obj.zhan == true">
				<textarea class="mess" :placeholder="obj.place" v-model="message"></textarea>
				<div class="buts">
					<div class="submit" @click="reply">回复</div>
				</div>
			</div>
		</div>
		<reply v-for="(obj,index) in obj.children" :key="index" :obj="obj" @callbackFn="callback"></reply>
	</div>
</template>
<style lang="less" scoped>
.childItem{
	margin-bottom: .1rem;
	border-bottom: 1px solid #f4f4f4;
	padding-bottom: .06rem;
	.childuser{
		margin-bottom: .06rem;
		display:flex;
		align-items: center;
		img{
			margin-right: .1rem;
			border-radius: 50%;
			width: .44rem;
			height: .44rem;
		}
		.childbiao{
			height: .34rem;
			line-height: .34rem;
			.childusername{
				display:flex;
				font-size: 14px;
				font-weight: bold;
				color: #333;
				.ns{
					font-size: 14px;
					font-weight: bold;
					color: #666;
				}
				.hui{
					margin-right: .05rem;
					margin-left: .05rem;
				}
				span{
					margin-left: .1rem;
					font-size: 13px;
					color: #999;
				}
			}
		}		
	}
	.childcontenTxt{
		margin-left: .5rem;
		font-size: 13px;
		color: #333;
	}
	.childinfo{
		display:flex;
		justify-content:flex-end;
		align-items: center;
		font-size: 13px;
		color: #38A1F3;
		.childreply:hover{
			color: rgb(44,129,208);
		};
		
	}
	.selChildreply{
		color: red;
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
}
</style>
<script>
	import reply from './reply.vue'
	export default{
		name: 'reply',
		data(){
			return{
				message: "",		//某个人的回复内容
				userObj:{},			//被点击的某个用户信息
			}
		},
		props: {
			obj: {
				type: Object,
				default: {}
			},
		},
		methods:{
			//点击某个人的回复按钮
			reback(obj){
				this.userObj = obj;
				this.$set(obj,'zhan',!obj.zhan);	//加一个回复框展示或不展示
				this.$set(obj,'place','回复 (200字以内) @' + obj.username);	//加一个回复框展示或不展示
				this.message = "";
			},
			//点击回复按钮发送子集评论
			reply(){
				if(this.message == ""){
					this.$message({
						message: "请输入要评论的内容哦～",
						type: 'warning'
					});
				}else{
					this.$emit('callbackFn',{userObj:this.userObj,message:this.message});
				}
			},
			callback(obj){
				this.$emit('callbackFn',obj);
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

		
	}
</script>