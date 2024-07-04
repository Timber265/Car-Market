import {createWebHistory, createRouter} from "vue-router";
import Index from '../pages/Index.vue'
import Forsale from "../pages/Forsale.vue";
import servicing from "../pages/servicing.vue";
import autoParts from "../pages/autoParts.vue";
import myOrders from "../pages/myOrders.vue";

const routes = [{path: '/', component: Index, name: 'main_page'}, {
    path: '/sale/:id?',
    component: Forsale,
    name: 'forsale_page'
}, {
    path: '/servicing',
    component: servicing,
    name: 'servicing_page'
}, {
    path: '/autoparts/page_:page/sort_:sort?/:min?/:max?/',
    component: autoParts,
    name: 'autoparts_page'
}, {path: '/myOrders', component: myOrders, name: 'myOrders_page'},]

export default createRouter({
    history: createWebHistory(), routes
})