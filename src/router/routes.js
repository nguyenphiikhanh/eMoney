import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Index from "@/views/Index.vue";

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'auth'
    }
  },
];

export { routes }
