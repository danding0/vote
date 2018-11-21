<template>
	<div class="index">
        <!-- <mt-header title="投票" fixed>
			<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
			<mt-button slot="right">分享</mt-button>
		</mt-header> -->
		<div class="banner">
            <img src="../../../../common/assets/images/banner.jpg" alt="">
        </div>
        <div class="content">
            <div class="count">
                <ul class="ul">
                    <li class="li">
                        <div>
                            <p class="">参赛选手</p>
                            <p>8888</p>
                        </div>
                    </li>
                    <li class="li">
                        <div>
                            <p>累计投票</p>
                            <p>8888</p>
                        </div>
                        
                    </li>
                    <li class="li">
                        <div>
                            <p>访问次数</p>
                            <p>8888</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="info">
                <p class="startTime"><i class="f-ib"></i>开始时间：2018-11-14</p>
                <p class="endTime"><i class="f-ib"></i>结束时间：2018-12-14</p>
                <p class="rule"><i class="f-ib"></i>投票规则：所对接口就看上房</p>
                <p class="introduce" :class="active?'active':''" @click="active = !active"><i class="f-ib ico"></i><span class="f-ib">活动介绍：{{test}}</span><i class="f-ib icon" v-if="active"></i></p>
            </div>
            <div class="list">
                <div class="item" v-for="(item,index) of list" :key="index">
                    <p class="img" @click="$router.push({name:'details'})"><img :src="item.img" alt=""></p>
                    <p class="text"><span>{{index+1}}号 : </span><span>{{item.name}}</span></p>
                    <p class="rule"><span class="f-ib count">已获票数：<em>{{item.count}}</em></span></p>
                    <p class="btn"><mt-button @click="vote()"><i class="f-ib icon"></i>投票</mt-button></p>
                </div>
            </div>
        </div>
        <div class="load"><span @click="load()">点击加载更多...</span></div>
	</div>
</template>

<script>
import { Toast, Indicator } from "mint-ui";
import {} from "@api/api_group";
export default {
  data() {
    return {
      active: true,
      test:
        "活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动",
      list: [
        {
          img: require("../../../../common/assets/images/item1.jpg"),
          name: "周杰伦",
          count: "888888"
        },
        {
          img: require("../../../../common/assets/images/item2.jpg"),
          name: "周杰伦",
          count: "888888"
        },
        {
          img: require("../../../../common/assets/images/item3.jpg"),
          name: "周杰伦",
          count: "888888"
        },
        {
          img: require("../../../../common/assets/images/item4.jpg"),
          name: "周杰伦",
          count: "888888"
        }
      ]
    };
  },
  created() {
    window.scrollTo(0, 0);
    var i = document.createElement("iframe");
    i.src = "https://www.baidu.com/favicon.ico";
    i.style.display = "none";
    i.onload = function() {
      setTimeout(function() {
        i.remove();
      }, 9);
    };
    document.title = '首页';
    document.body.appendChild(i);
  },
  methods: {
    load() {
      Indicator.open("加载中...");
      setTimeout(() => {
        Indicator.close("加载中...");
      }, 1000);
    },
    vote() {
      var token = true
      if(token) {
        Toast({
          message: "暂未登录，您请先登录"
        });
      setTimeout(() => {
        this.$router.push({
          path:"/login"
        })
      },1000)
      }else{
        Toast({
          message: "投票成功"
        });
      }
      
    }
  }
};
</script>

<style lang="scss"  scoped="scoped">
@import "./index.less";
</style>



