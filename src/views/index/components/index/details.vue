<template>
	<div class="details">
        <!-- <mt-header title="参赛选手详情" fixed>
		      <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
		      <mt-button slot="right">分享</mt-button>
	    </mt-header> -->
      <div class="content">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">个人</mt-tab-item>
          <mt-tab-item id="2">作品集</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="personal_info">
              <div class="personal_name"><span class="f-dib">1111号</span><span class="f-dib">张三</span></div>
              <div class="personal_img"><img preview='1' :src="list[0].img" alt=""></div>
              <div class="personal_introduce">接不接受的接撒很伤的是的接不接受的接撒很伤的是的接不接受的接撒很伤的是的接不接受的接撒很伤的是的 </div>
            </div>
            <div class="btn">
              <div class="ranking">
                <p>当前排名:1</p>
                <p>当前票数:2123</p>
              </div>
              <div class="btn_cli"><mt-button>赏TA一票</mt-button></div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="sampleReels">
              <div class="sampleReels_title f-pr">
                <p>作品名称：</p>
                <p>作品名称</p>
              </div>
              <div class="sampleReels_content">
                <div class="sampleReels_title f-pr">
                  <p>作品展示：</p>
                </div>
                <div class="type_img" v-if="false">
                  <img v-for="(item,index) of list" preview='2' :src="item.img" alt="">
                </div>
                <div class="type_video" v-if="true">
                    <div>
                        <video v-for="(item,index) of list" :src="item.video" poster preload controls width="100%">
                             <!-- webkit-playsinline
                            playsinline="true"
                            x-webkit-airplay="allow" 
                            x5-video-player-type="h5"  
                            x5-video-player-fullscreen="true"
                            x5-video-orientation="portraint"  -->
                            <!-- <source :src="item.video" type="video/mp4"> -->
                        </video>
                    </div>
                    <!-- <div><img src="../../../../common/assets/images/def.gif" alt=""></div> -->
                  
                </div>
                <div class="type_text" v-if="false">
                    富文本内容
                </div>
              </div>
            </div> 
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      selected:'1',
      active: true,
      list: [
        {
          img: require("../../../../common/assets/images/item1.jpg"),
          name: "周杰伦",
          count: "888888",
          video:'//mp4.vjshi.com/2018-09-25/cd26c56ac1e385e7b1374ebc285fc6ce.mp4',
        },{
          img: require("../../../../common/assets/images/banner.jpg"),
          name: "周杰伦",
          count: "888888",
          video:'//mp4.vjshi.com/2018-11-17/b211566701a2eebf7de5fb2587db044f.mp4',
        },{
          img: require("../../../../common/assets/images/logo.png"),
          name: "周杰伦",
          count: "888888",
          video:'//mp4.vjshi.com/2018-11-13/c1bd8fa330fa5e71d62d2d25e8938b7d.mp4',
        },{
          img: require("../../../../common/assets/images/time.png"),
          name: "周杰伦",
          count: "888888",
          video:'//mp4.vjshi.com/2018-11-13/cfb92fc826d9e3a0253b0ce63d3fff20.mp4',
        }
      ]
    };
  },
  created() {
      window.scrollTo(0,0);
  },
  methods: {
  }
};
</script>

<style lang="scss"  scoped="scoped">
@import '../../../../common/styles/mixin.scss';
.mint-navbar .mint-tab-item.is-selected {
  color: #fe793e !important;
  border-bottom-color: #fe793e !important;
}
.mint-tab-item {
  color: #666666;
}
.mint-tab-item-label {
  @include font-dpr(18px);
  font-size: 18px;
}
.details {
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
  .content {
      height: 100%;
      background-color: #fff;
      margin: .133333rem .16rem 1.066667rem;
      box-shadow: 0px 0px 10px #999;
      border-radius: .16rem;
      .personal_info {
        padding: .533333rem .213333rem 0rem;
        .personal_name {
          span {
            height: .906667rem;
            line-height: .906667rem;
            &:nth-of-type(1){
              width: 1.866667rem;
              @include font-dpr(16px);
              color: #fff;
              background-color: #fe793e;
              text-align: center;
              border-radius: 0 .16rem .16rem 0;
              margin-right: .266667rem;
            }
            &:nth-of-type(2){
              @include font-dpr(18px);
              color: #333;
              font-weight: 700;
            }
          }
        }
        .personal_img {
          width: 95%;
          max-height: 9.066667rem;
          margin: 0 auto;
          padding: .266667rem 0 0;
          overflow: hidden;
        }
        .personal_introduce {
          padding: .266667rem .106667rem 0;
          color: #666;
          @include font-dpr(16px);
          text-indent:2em;
        }
      }
      .btn {
        display: flex;
        padding: .533333rem 0 1.066667rem;
        div {
          flex: 1;
          margin: 0 .533333rem;
          button {
            background-color: #fe793e;
            color: #fff;
            width: 100%;
          }
        }
        .ranking {
          background-color: #fe793e;
          border-radius: .106667rem;
          color: #fff;
          p {
            text-align: center;
            padding: .053333rem 0;
          }
        }
      }
      .sampleReels {
        padding: .533333rem .213333rem 0rem;
        .sampleReels_title {
          // @include font-dpr(16px);
          // margin-left: .373333rem;
          // height: .426667rem;
          // line-height: .426667rem;
          // &:before {
          // position: absolute;
          // content: '';
          // width: .106667rem;
          // height: .426667rem;
          // background-color: #fe793e;
          // left: -0.213333rem;
          // top: 0rem;
          // }
           @include font-dpr(16px);
           padding-bottom: .266667rem;
            p {
              height: .906667rem;
              line-height: .906667rem;
              &:nth-of-type(1) {
                color: #fff;
                width: 2.666667rem;
                background-color: #fe793e;
                text-align: center;
                border-radius: 0 .106667rem .106667rem 0;
              }
              &:nth-of-type(2) {
                color: #fe793e;
                padding-left: 2.666667rem;
              }
            }
        }
        .sampleReels_content {
          .type_img {
            width: 100%;
            img {
              width: 100%;
              padding-bottom: .16rem;
            }
          }
          .type_text {
              p {
                  img {
                      width: 100% !important;
                  }
              }
          }
          .type_video {
            //   div{
            //       width: 100%;
            //       height: 5.333333rem;
            //       background: url('../../../../common/assets/images/def.gif') no-repeat center center;
            //       background-size: 100%;
            //   }
          }
        }
      }
  }
  
}
img {
    width: 100%;
    height: 100%;
  }
</style>