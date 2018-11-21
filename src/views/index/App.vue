<template>
	<div id="app" class="f-pr">
		<div :class="isShow?'main':''">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
		<div class="footer" v-if="isShow"><myfooter></myfooter></div>
	</div>
</template>

<script>
import myfooter from '@/common/footer/tabs.vue'
import { Toast } from 'mint-ui'
export default {
    components:{
        "myfooter":myfooter
    },
  data() {
    return {
        isShow:true
	};
  },
  created() {},
  watch: {
      $route(to, from){
          if(to.path == '/login' || to.path == '/register'){
              this.isShow = false
          }
      }
  },
  methods: {},

};
</script>

<style lang="scss"  scoped="scoped">
#app {
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  font-family: "Microsoft YaHei", \5fae\8f6f\96c5\9ed1, arial, \5b8b\4f53;
  .main{
    //   margin: 1.066667rem 0rem 100px 0rem;
  }
}
</style>

 