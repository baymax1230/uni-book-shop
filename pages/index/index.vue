<template>
	<view class="content" @click="a">
		首页
		
			</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		
		methods: {
       
		},
		async onLoad() {
		// try{
		// 	let res = await uni.$u.http.get('/api/goods')
		// }catch(e){
		// 	console.log(e)
			
		// }
		// let res = await uni.$u.http.patch('api/orders/1/confirm',{name:'Tom'})
		// console.log(res)
		const data = {
			email:"test@a.com",
			password:'123123'
		}
		const res = await this.$u.api.authLogin()
		console.log(res)
		// uni.$u.http.get('/api/goods').then(res =>{
		// 	console.log(res)
		// }).catch(err =>{
		// 	console.log(err)
		// })
		
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
