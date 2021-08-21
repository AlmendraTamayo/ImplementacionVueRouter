import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import SobreMi from '@/views/SobreMi.vue'
import Inicio from '@/views/Inicio.vue'
/* import Post from '@/views/Post.vue' */
import Articulo from '@/views/Articulo.vue'




Vue.use(VueRouter)


const router = new VueRouter({
  routes:[{
    path: '*',
    component: NotFound
},{
  path:'/sobremi',
  name: 'SobreMi',
  component: SobreMi
},{
  path:'/',
  name: 'Inicio',
  component: Inicio
},{
  path:'/contacto',
  component: ()=>import("@/views/Contacto.vue")
}, {
  path:'/post/:id',
  name: 'post',
  component: ()=>import("@/views/Post.vue"),
   children:[{
    path: '/',
    name: 'articulo',
    component: Articulo
  }] 
}]

})

export default router
