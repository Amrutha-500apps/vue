import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Ques5 from '../components/Ques5'
import Que6 from '../components/Que6'
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
    {
        path:'/Que6',
        name:'App',
        component:Que6
    },
]

let router = new Router({routes})
export default router