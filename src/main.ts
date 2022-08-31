import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'

const app = createApp(App);
app.use(router);

/*
Fix Vue Router 4 issue, wait for router to done loading
and only then, mount to app
This way we have access to query params  in created,mounted hooks
For more info see:
 https://www.vuemastery.com/blog/vue-router-4-route-params-not-available-on-created-setup/
*/
router.isReady().then(() => app.mount('#app'));

