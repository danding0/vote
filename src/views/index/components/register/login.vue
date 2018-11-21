<template>
	<div class="login">
		<!-- <mt-header title="登录" fixed>
			<mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
			<mt-button slot="right" @click="$router.push({path:'/register'})">注册</mt-button>
		</mt-header> -->
		<div class="top">
			<div class="logo">
				<img src="../../../../common/assets/images/logo.png" alt="">
			</div>
            <ul class="form">
			    <li class="ipt"><i class="phone"></i><input v-model="params.phone" type="number" placeholder="请输入手机号" maxlength="11" @input="maxlengthFn(params.phone)"></li>
			    <li class="ipt"><i class="pwd"></i><input v-model="params.pwd" type="password" placeholder="请输入密码" maxlength="20"></li>
		    </ul>
            <div class="btn">
				<button @click="login">登录</button>
				<p class="register" @click="$router.push({path:'/register'})">前往注册</p>
			</div>
		</div>
		<!-- <ul class="form">
			<li class="ipt"><i class="phone"></i><input v-model="params.phone" type="text" placeholder="请输入手机号" maxlength="11" @blur="refreshPIN"></li>
			<li class="ipt"><i class="pwd"></i><input v-model="params.pwd" type="password" placeholder="请输入密码" maxlength="20"></li>
			<li class="ipt PIN-wraper">
				<i class="verifi"></i>
				<input v-model="params.PIN" type="text" placeholder="请输入验证码">
				<div class="PIN-image" @click='refreshPIN'>
					<img  alt="" ref="PINimg" src="">
				</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
	import md5 from '@common/assets/js/md5';
	import { getValCode, login } from '@api/api_group';
	import {Toast} from 'mint-ui';
	const total = 60;//计数总秒数
	export default {
		data() {
			return {
				params: {
					phone: '',
					pwd:'',
					PIN:''
				}
			}
		},
		created() {
            window.scrollTo(0,0);
		},
		methods: {
            maxlengthFn(val){
                if(val.length > 11) {
                    this.params.phone = val.slice(0, 11)
                }
            },
	        refreshPIN() {
				Toast('获取验证码')
                // getValidateCode({
                //     countryCode: this.countryCode,
                //     phone: this.tel,
                // }).then((res) => {
                //     this.PINsrc = `data:image/jpeg;base64,${res.data}`;
                //     this.$refs.PINimg.setAttribute('src', this.PINsrc);
                // });
            },
			// 提登录册资料
			login(){
				if(!this.params.phone){
					Toast({
						message: '请输入手机号',
  						position: 'bottom',
					});
					return false;
				}
				if(!this.globalFun.phoneCheck(this.params.phone)){
					Toast({
						message: '手机号格式不正确',
  						position: 'bottom',
					});
					return false;
				}
				if(!this.params.pwd){
					Toast({
						message: '请输入密码',
  						position: 'bottom',
					});
					return false;
				}
				// if(!this.params.PIN){
				// 	Toast({
				// 		message: '请输入验证码',
  				// 		position: 'bottom',
				// 	});
				// 	return false;
				// }
				// this.$router.push({
				// 		path:"/",
				// 	})
				login({
					phone: this.params.phone,
					password: md5(this.params.pwd).toLowerCase(),
				}).then((res) => {
					if(res.code == 0){
						Toast({
							message: '登录成功',
							position: 'bottom',
                        });
                        localStorage.setItem('Authorization',res.token)
						this.$router.push({
							path:"/index",
						})
					}
				});
			},
			// 获取手机验证码
			getVCode(){
				if(!this.params.phone){
					Toast({
						message: '请输入手机号',
  						position: 'bottom',
					});
					return false;
				}
				if(!this.globalFun.phoneCheck(this.params.phone)){
					Toast({
						message: '手机号格式不正确',
  						position: 'bottom',
					});
					return false;
				}
				
				getValCode({
					phone: this.params.phone,
					type: 1,
					countryCode:86
				}).then((res) => {
					if(res && res.success){
						Toast({
							message: '发送成功',
							position: 'bottom',
						});
						this.getCount();
					}
				});
			},
			// 验证码发送后倒数 120秒
			getCount(){
				let _this = this;
				this.count = total;
				var interval = setInterval(() => {
					if(_this.count<=0){
						_this.count = -1;
						clearInterval(interval)
					}else{
						--_this.count;
					}
				}, 1000);
			},
		}
	}
</script>

<style lang="scss"  scoped="scoped">
	@import '../../../../common/styles/mixin.scss';
	.login {
        min-height: 100vh;
		.top{
            background: url('../../../../common/assets/images/loginBanner.png') no-repeat;
            background-size: 100%;
            min-height: 100vh;
			.logo {
				padding-top: 25%;
				width: 2.666667rem;
				height: 2.666667rem;
				margin: 0 auto;
				img {
					width: 100%;
				}
			}
            ul.form{
			padding: 40% 0.9335rem 0 1.6rem;
			li{
				height: 1.307rem;
				line-height: 1.307rem;
				display: flex;
				width: 100%;
				position: relative;
				i{
					width: 0.5336rem;
					height: 0.5336rem;
					position: absolute;
					left: -0.7rem;
					top: 0.37rem;
					opacity: 1;
				}
				.phone{
					background: url('../../../../common/assets/images/register_mobile.png') no-repeat;
					background-size: 100%;
				}
				.verifi{
					background: url('../../../../common/assets/images/register_verification.png') no-repeat;
					background-size: 100%;
				}
				.pwd{
					background: url('../../../../common/assets/images/register_password.png') no-repeat;
					background-size: 100%;
				}
				.codeBtn{
					background-color: #ED6F36;
					color:#fff;
					border: 0;
					padding: 0 0.3735rem;
					margin: 0.2535rem 0;
					line-height: 0.75rem;
					border-radius: 1rem;
                }
                .active {
                    background-color: #999;
					color:#fff;
					border: 0;
					padding: 0 0.3735rem;
					margin: 0.2535rem 0;
					line-height: 0.75rem;
					border-radius: 1rem;
                }
				&.ipt{
					border-bottom: 1px solid #F0F0F0;
					input{
						border: 0;
						flex: 1;
						width: 100%;
						display: block;
						@include font-dpr(14px);
                        background-color: #fffbf9;
					}
				}
			}
		}
		}
		
		.btn{
			text-align: center;
			margin: 0.9335rem 1.25rem 0.5735rem 1.25rem;
			button{
				background-color: #ED6F36;
				color:#fff;
				border: 0;
				width: 100%;
				height: 1.067rem;
				border-radius: 1rem;
				@include font-dpr(15px);
				box-shadow:2px 5px 5px rgba(237,111,54,0.3), -2px 5px 5px rgba(237,111,54,0.3);
			}
			.register {
				@include font-dpr(14px);
				padding: .533333rem .266667rem 0 0;
				text-align: right;
				// a {
					color: #ED6F36;
				// }
			}
		}
	}
</style>



