<template>
    <div class="error">
		<div class="h">404</div>
		<div class="b">页面不存在!</div>
		<div class="f actions">
			<router-link to="/Home" class="btn">返回首页</router-link>
		</div>
    </div>
</template>
<script>
    export default {
        name: 'Error',
    };
</script>
<style lang="scss">
	.error{
		position: absolute;
		top:0;
		right:0;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width:100%;
		height:100%;
		text-align: center;
		.h{
			font-size:48px;
			color:#999;
		}
		.b{
			padding-bottom: 20%;
		}
	}
</style>