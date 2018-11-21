<template>
	<div class="index">
        <!-- <mt-header title="活动列表" fixed>
			<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
			<mt-button slot="right">分享</mt-button>
		</mt-header> -->
        <div class="list">
            <div class="item" v-for="(item,index) of list" :key="index" @click="$router.push({name:'index'})">
                <p class="img"><img :src="item.img" alt=""></p>
                <p class="text"><span class="f-ib">{{item.activityName}}</span><span class="f-fr">参与人数 : <em>{{item.count}}</em></span></p>
            </div>
        </div>
        <div class="load">
            <!-- <span @click="load()">点击加载更多...</span> -->
            <span class="Baseline f-pr">我是有底线的</span>    
        </div>
	</div>
</template>

<script>
import { Toast,Indicator  } from 'mint-ui'

import {  } from "@api/api_group";
export default {
  data() {
    return {
        list: [{
            img :require('../../../../common/assets/images/banner.jpg'),
            activityName:"活动名称活动名称活动名称活动名称活动名称活动名称",
            count:"888888"
        },{
            img :require('../../../../common/assets/images/banner.jpg'),
            activityName:"活动名称活动名称活动名称活动名称活动名称活动名称",
            count:"888888"
        },{
            img :require('../../../../common/assets/images/banner.jpg'),
            activityName:"活动名称活动名称活动名称活动名称活动名称活动名称",
            count:"888888"
        },{
            img :require('../../../../common/assets/images/banner.jpg'),
            activityName:"活动名称活动名称活动名称活动名称活动名称活动名称",
            count:"888888"
        }],
        headerShow:true,
    };
  },
  created() {
      window.scrollTo(0,0);
      var i = document.createElement("iframe");
    i.src = "https://www.baidu.com/favicon.ico";
    i.style.display = "none";
    i.onload = function() {
      setTimeout(function() {
        i.remove();
      }, 9);
    };
    document.title = '活动';
    document.body.appendChild(i);
  },
  methods: {
      load() {
      Indicator.open('加载中...');
      setTimeout(() => {
        Indicator.close('加载中...');
      },1000)
      
    }
  }
};
</script>

<style lang="scss"  scoped="scoped">
@import './list.less';
</style>



