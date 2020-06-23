import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "Home",
      component: () => import("@/views/home/Home.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/auth/Login.vue")
    },
    {
      path: "/",
      name: "Register",
      // route level code-splitting
      // this generates a separate chunk (register.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "register" */ "@/views/auth/Register.vue")
    },
    {
      path: "*",
      redirect: "login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  // Check if the user is logged i
  const isUserLoggedIn = store.getters.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      store.dispatch("logOut");
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
