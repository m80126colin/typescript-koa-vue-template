import VueRouter from 'vue-router';
import Hello from '@/views/Hello.vue';

const routes = [
  { path: '/', component: Hello }
]

export default new VueRouter({
  routes
})