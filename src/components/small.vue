<template>
	<div class="er">
		<img class="pc" src="../assets/pc.png">
		<div class="ai">请您移步至pc端查看哦^_^</div>
	</div>
</template>
<style lang="less" scoped>
.er{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.pc{
		margin: 2rem auto 0;
		width: 5rem;
	}
	.ai{
		margin-top: 1rem;
		font-size: .6rem;
		color: #666;
	}
}


</style>
<script>
	export default{

	}
</script>