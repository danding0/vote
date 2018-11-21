<template>
	<div class="register">
		<!-- <mt-header title="注册" fixed>
			<mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
			<mt-button slot="right" @click="$router.push({path:'/login'})">登录</mt-button>
		</mt-header> -->
		<div class="top">
			<p class="mainTip">欢迎来到投票平台</p>
			<p class="subTip">注册并登录，为自己心仪的选手投上最宝贵的一票。</p>
		</div>
		<ul class="form">
			<li class="ipt"><i class="phone"></i><input v-model="params.phone" type="number" placeholder="请输入手机号" maxlength="11" @input="maxlengthFn(params.phone)"></li>
			<li class="ipt">
				<i class="verifi"></i>
				<input v-model="params.vCode" type="text" placeholder="请输入验证码" maxlength="6">
				<button class="codeBtn" @click="getVCode()" v-if="count<0">获取验证码</button>
				<button class="active" v-if="count>=0">{{count}}后重新获取</button>
			</li>
			<li class="ipt"><i class="pwd"></i><input v-model="params.pwd" type="password" placeholder="请输入密码" maxlength="20"></li>
			<li class="ipt"><i class="pwd"></i><input v-model="params.confirmPwd" type="password" placeholder="请再次输入密码" maxlength="30"></li>
		</ul>
		<div>
			<div class="btn">
				<button @click="register">注册</button>
			</div>
		</div>
		
	</div>
</template>

<script>
import axios from "axios"
import md5 from "@common/assets/js/md5";
import { getValCode, register } from "@api/api_group";
import { Toast } from "mint-ui";
const total = 60; //计数总秒数
export default {
  data() {
    return {
      params: {
        phone: "",
        vCode: "",
        pwd: "",
        confirmPwd: ""
      },

      count: -1
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    maxlengthFn(val) {
      if (val.length > 11) {
        this.params.phone = val.slice(0, 11);
      }
    },
    // 提交注册资料
    register() {
      if (!this.params.phone) {
        Toast({
          message: "请输入手机号",
          position: "bottom"
        });
        return false;
      }
      if (!this.globalFun.phoneCheck(this.params.phone)) {
        Toast({
          message: "手机号格式不正确",
          position: "bottom"
        });
        return false;
      }
      if (!this.params.vCode) {
        Toast({
          message: "请输入验证码",
          position: "bottom"
        });
        return false;
      }
      if (!this.params.pwd || !this.params.confirmPwd) {
        Toast({
          message: "请输入密码",
          position: "bottom"
        });
        return false;
      }
      if (this.globalFun.lengthRange(this.params.pwd, 6, 20)) {
        Toast({
          message: "密码必须是6~20位",
          position: "bottom"
        });
        return false;
      }

      if (this.params.pwd !== this.params.confirmPwd) {
        Toast({
          message: "两次密码不一致",
          position: "bottom"
        });
        return false;
      }
      register({
        phone: this.params.phone,
        password: md5(this.params.pwd).toLowerCase()
      }).then(res => {
        if (res.code == 0) {
          Toast({
            message: "注册成功",
            position: "bottom"
          });
          // setTimeout(() => {
          //   this.$router.push({
          //     path: "/index"
          //   });
          // }, 500);
        } else {
          Toast({
            message: res.msg,
            position: "bottom"
          });
        }
      });
    },
    // 获取手机验证码
    getVCode() {
      var _this = this;
      if (!_this.params.phone) {
        Toast({
          message: "请输入手机号",
          position: "bottom"
        });
        return false;
      }
      if (!this.globalFun.phoneCheck(this.params.phone)) {
        Toast({
          message: "手机号格式不正确",
          position: "bottom"
        });
        return false;
      }

      let url = `api/smscode/send/reg/${this.params.phone}`
      axios(url).then(res => {
        if (res.code == 0) {
          Toast({
            message: "发送成功",
            position: "bottom"
          });
          this.getCount();
        }
      });
    },
    // 验证码发送后倒数 120秒
    getCount() {
      let _this = this;
      this.count = total;
      var interval = setInterval(() => {
        if (_this.count <= 0) {
          _this.count = -1;
          clearInterval(interval);
        } else {
          --_this.count;
        }
      }, 1000);
    },
    // 跳转到协议页面
    goAgreement() {
      this.$router.push({
        path: "/agreement"
      });
    }
  }
};
</script>

<style lang="scss"  scoped="scoped">
@import "../../../../common/styles/mixin.scss";
.register {
  .top {
    background: #f3f4f6;
    padding: 1.066667rem 0.9335rem 0.697rem;
    .mainTip {
      @include font-dpr(19px);
      color: #333;
      margin-bottom: 0.1rem;
    }
    .subTip {
      @include font-dpr(13px);
      color: #888;
    }
  }
  ul.form {
    padding: 0 0.9335rem 0 1.6rem;
    li {
      height: 1.307rem;
      line-height: 1.307rem;
      display: flex;
      width: 100%;
      position: relative;
      i {
        width: 0.5336rem;
        height: 0.5336rem;
        position: absolute;
        left: -0.7rem;
        top: 0.37rem;
        opacity: 1;
      }
      .phone {
        background: url("../../../../common/assets/images/register_mobile.png")
          no-repeat;
        background-size: 100%;
      }
      .verifi {
        background: url("../../../../common/assets/images/register_verification.png")
          no-repeat;
        background-size: 100%;
      }
      .pwd {
        background: url("../../../../common/assets/images/register_password.png")
          no-repeat;
        background-size: 100%;
      }
      .codeBtn {
        background-color: #ed6f36;
        color: #fff;
        border: 0;
        padding: 0 0.3735rem;
        margin: 0.2535rem 0;
        line-height: 0.75rem;
        border-radius: 1rem;
      }
      .active {
        background-color: #999;
        color: #fff;
        border: 0;
        padding: 0 0.3735rem;
        margin: 0.2535rem 0;
        line-height: 0.75rem;
        border-radius: 1rem;
      }
      &.ipt {
        border-bottom: 1px solid #f0f0f0;
        input {
          border: 0;
          flex: 1;
          width: 100%;
          display: block;
          @include font-dpr(14px);
        }
      }
    }
  }
  .btn {
    text-align: center;
    margin: 0.9335rem 1.25rem 0.5735rem 1.25rem;
    button {
      background-color: #ed6f36;
      color: #fff;
      border: 0;
      width: 100%;
      height: 1.067rem;
      border-radius: 1rem;
      @include font-dpr(15px);
      box-shadow: 2px 5px 5px rgba(237, 111, 54, 0.3),
        -2px 5px 5px rgba(237, 111, 54, 0.3);
    }
  }
}
</style>



