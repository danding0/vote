<template>
	<div class="tabs">
		<div class="index">
			
			<!-- <div class="page-wrap">
				<keep-alive>
					<router-view ></router-view>
				</keep-alive>
			</div> -->
			<div class="my-tabs">
				<div class="row">
					<div class="col my-tab-item" :class="currTab==index?'active':''" v-for="(item,index) of tabList" :key="index" @click="checkTab(index)">
						<img slot="icon" :src="currTab==index?item.icon1:item.icon2">
						<div class="lb">{{item.title}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
	export default {
        name: 'page-tabbar',
		data() {
			return {
				tabList:[{
					title: "活动",
					path: "/activityList",
					icon1: require("../../common/assets/images/main_2.png"),
					icon2: require("../../common/assets/images/main_1.png")
				},{
					title: "投票",
					path: "/index",
					icon1: require("../../common/assets/images/index_2.png"),
					icon2: require("../../common/assets/images/index_1.png")
				},{
					title: "我的",
					path: "/center",
					icon1: require("../../common/assets/images/me_iocn_2.png"),
					icon2: require("../../common/assets/images/me_iocn_1.png")
				}],
                currTab:-1
			}
		},
		created() {
			this.getCurrTab()
			if( location.hash == '#/details'){
				this.currTab = 1;
			}
		},
		watch:{
			$route(to,from){
				this.getCurrTab()
			}
		},
		methods: {
			getCurrTab(path){
                for(var index in this.tabList){
                    let item = this.tabList[index];
                    if(item.path === this.$route.path){
                        this.currTab = Number(index);
                        break;
                    }
                }
			},
			checkTab(index){
				this.currTab = index;
				if(index == 3 && !localStorage.getItem("token")){
					Toast('您还未登录,请先登录')
					setTimeout(() => {
						this.$router.push({path: "/login"})
					},1000)
					
					return false;
				}
				this.$router.push({path: this.tabList[index].path})
			}
        }
	}
</script>

<style lang="scss"  scoped="scoped">
@import "../../common/styles/mixin.scss"; 
	.index{
        overflow: hidden;
        // height: 100vh;
    }
    .page-wrap {
        padding-bottom:55px;
    }
	.my-tabs{
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		margin: 0 auto;
		.row{
			width: 100%;
			background: #F7F7F7;
            border-top:1px solid #eee;
            display: flex;
			.my-tab-item{
                flex: 1;
				text-align: center;
				padding: 0.1735rem 0;
				.lb{
					@include font-dpr(10px);
				}	
				img{
					width: 0.64rem;
					height: 0.64rem;
				}
				&.active{
					.lb{
						color:#fe793e;
					}
				}
			}
		}
	}
</style>

