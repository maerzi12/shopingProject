import './assets/rem'

import Vue from 'vue'
import App from './App'
import router from './router'


import { Swipe, SwipeItem, Button, NavBar, Icon, Sticky, Tabbar, TabbarItem, PullRefresh } from 'vant'
import { Loading, Popup, Area, Grid, GridItem, ActionSheet } from 'vant'

Vue.config.productionTip = false

Vue.use(Button).use(Swipe).use(SwipeItem).use(Tabbar).use(PullRefresh).use(Area)
    .use(NavBar).use(Icon).use(Sticky).use(TabbarItem).use(Loading).use(Popup)
    .use(GridItem).use(Grid).use(ActionSheet)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})