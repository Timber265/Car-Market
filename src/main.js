import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";
import {gsap} from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import Paginate from 'vuejs-paginate-next'
gsap.registerPlugin(TextPlugin);

const app = createApp(App)
app.use(router)
app.use(store)
app.component('paginate', Paginate)
app.mount('#app')
