import Register from "@/views/Register.vue";
import Index from "@/views/Index.vue";

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/register',
    component: Register,
    meta: {
      layout: 'auth'
    }
  },
];

export { routes }
