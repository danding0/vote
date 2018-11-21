

<template>
	<div class="center">
      <!-- <mt-header title="我的" fixed>
		    <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
		    <mt-button slot="right">分享</mt-button>
	    </mt-header> -->
      <div class='info'>
        <div class="img f-ib">
            <img src="../../../../common/assets/images/my.jpg" alt="">
        </div>
        <div class="information f-ib">
          <p class="lb"><span class="f-ib key val">姓名：张三</span></p>
          <p class="lb"><span class="f-ib val">手机号码：1888888888</span></p>
          <p class="lb"><span class="f-ib val">就读学校：同乐教育同乐教育</span></p>
          <p class="lb"><span class="f-ib key val">年级：高一</span></p>
        </div>
      </div>
      <div class="content">
        <div class="title f-pr">投票记录</div>
        <div>
          <div class="voteRecord" v-for="(item,index) of list" :key="index">
            <div class="img f-ib"><img :src="item.img" alt=""> </div>
            <div class="infoRecord f-ib">
                <p>{{item.name}}</p>
                <p>{{item.count}}</p>
            </div>
          </div>
        </div>
        
        <div class="load"><span @click="load()">点击加载更多...</span></div>
      </div>
    
	</div>
</template>

<script>
import { Toast,Indicator  } from 'mint-ui'
export default {
  data() {
    return {
      active: true,
      list: [
        {
          img: require("../../../../common/assets/images/banner.jpg"),
          name: "活动名称",
          count: "活动详情活动详情活动详情活动详情活动详情活动详情"
        },{
          img: require("../../../../common/assets/images/banner.jpg"),
          name: "周杰伦",
          count: "活动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情活动详情"
        },{
          img: require("../../../../common/assets/images/banner.jpg"),
          name: "周杰伦",
          count: "活动详情活动详情活动详情活动详情活动详情活动详情"
        },{
          img: require("../../../../common/assets/images/banner.jpg"),
          name: "周杰伦",
          count: "活动详情活动详情活动详情活动详情活动详情活动详情"
        },{
          img: require("../../../../common/assets/images/banner.jpg"),
          name: "周杰伦",
          count: "活动详情活动详情活动详情活动详情活动详情活动详情"
        }
      ]
    };
  },
  created() {
      window.scrollTo(0,0);
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
@import "../../../../common/styles/mixin.scss";
.center {
  min-height: 100vh;
    .info {
      width: 100%;
      background: -webkit-linear-gradient(to right, rgba(254,121,62,.6) , rgba(254,121,62,1)); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(to right, rgba(254,121,62,.6), rgba(254,121,62,1)); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(to right, rgba(254,121,62,.6), rgba(254,121,62,1)); /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, rgba(254,121,62,.6) , rgba(254,121,62,1)); /* 标准的语法 */
      padding: .8rem 0rem;
      display: flex;
      .img {
        width: 2.133333rem;
        height: 2.133333rem;
        margin: 0rem .533333rem;
        img {
          width: 2.133333rem;
          height: 2.133333rem;
          border-radius: 50%;
        }
      }
      .information {
        vertical-align: top;
        color: #fff;
        @include font-dpr(14px);
        overflow: hidden;
        p {
            padding-right: .266667rem;
          .key {
            text-indent: 2em;
          }
          .val {       
            text-overflow: ellipsis;
            overflow: hidden;
            vertical-align: middle;
          }
        }
      }
    }
    .content {
      padding: .533333rem .106667rem;
      background-color: #fff;
      .title {
        @include font-dpr(16px);
        margin-left: .373333rem;
        height: .426667rem;
        line-height: .426667rem;
        &:before {
          position: absolute;
          content: '';
          width: .106667rem;
          height: .426667rem;
          background-color: #fe793e;
          left: -0.213333rem;
          top: 0rem;
        }
      }
      .voteRecord {
        display: flex;
        padding: .266667rem .106667rem;
        border-bottom: 1px dashed #fe793e;
        &:last-of-type{
          border: none;
        }
        .img {
          margin-right: .533333rem;
          vertical-align: middle;
          text-align: center;
          width: 2.666667rem;
          height: 2.133333rem;
          img {
            width: 2.666667rem;
            height: 2.133333rem;
          }
        }
        .infoRecord {
          height: 100%;
          vertical-align: middle;
          p {
            &:nth-of-type(1){
              color: #333333;
               @include font-dpr(16px);
               padding-bottom: .106667rem;
            }
            &:nth-of-type(2){
              color: #666;
              @include font-dpr(14px);
              overflow:hidden; 
              text-overflow:ellipsis;
              display:-webkit-box; 
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
            }
          }
        }
      }
    }
}

</style>







