import {createWebHashHistory,createRouter} from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

export enum ROUTES {
    HomePage = '/',
    AboutPage = '/about',
    NotFoundPage = '/:pathMatch(.*)*'
}

const routes  = [
    {path: ROUTES.HomePage, component: HomePage},
    {path: ROUTES.AboutPage, component: AboutPage},
    {path: ROUTES.NotFoundPage, component: NotFoundPage},
    {path: '/about/:id', component: AboutPage}
]

 const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, 
  })

export default router
