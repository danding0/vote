import Vue from 'vue'
import App from './App'
import router from './router'
import utils from '@common/utils'
import 'mint-ui/lib/style.css'
import '@common/assets/js/flexible'
// 样式引入
import '@common/assets/styles/flexible.css'
import '@common/styles/global.scss'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

import {Header,Button, TabItem,Navbar,TabContainer,TabContainerItem} from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

// Vue.use(MintUI)
Vue.prototype.globalFun = utils;
new Vue({
  el: '#app',
  router: router.routerGroup,
  render: h => h(App)
})


