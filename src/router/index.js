import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../view/HelloWorld.vue'
import Liste from './../components/Liste.vue'
import Detail from './../view/Detail.vue'
import Debut from './../view/Debut.vue'
import Favoris from './../view/Favoris.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Debut },
        { path: '/home', component: HelloWorld },
        { path: '/detail', component: Detail },
        { path: '/detail/:id', component: Liste },
        { path: '/favoris', component: Favoris },
    ]
})