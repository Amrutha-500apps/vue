import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Ques5 from '../components/Ques5'
 Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'Home',
        component:HelloWorld
    },
    {
        path:'/Ques5',
        name:'App',
        component:Ques5
    },
]

let router = new Router({routes})
export default router