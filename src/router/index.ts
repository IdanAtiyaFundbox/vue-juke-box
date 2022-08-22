import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import {createWebHashHistory,createRouter} from 'vue-router';

export enum ROUTES {
    HomePage = '/',
    AboutPage = '/about'
}

const routes  = [
    {path: ROUTES.HomePage, component: HomePage},
    {path: ROUTES.AboutPage, component: AboutPage},
    {path: '/about/:id', component: AboutPage}
]

 const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, 
  })

export default router
