import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/style/index.css'
import '@/assets/iconfont/iconfont.css' //引入图标样式
import vant from 'vant' //引入vant
import 'vant/lib/index.css' //引入vant样式

import { Swipe, SwipeItem } from 'vant';

Vue.config.productionTip = false;
<<<<<<< HEAD
if (process.env.NODE_ENV === "development") {
    require("./mock/index.js")
}
=======
Vue.use(Swipe);
Vue.use(SwipeItem);
>>>>>>> 265fb6892f5963b153b7ce55a01db7e78843acd0
Vue.use(vant)
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");