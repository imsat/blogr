// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "babel-polyfill";
import App from "./App";
import router from "./router";
import { createProvider } from "./vue-apollo";
import store from "./store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  apolloProvider: createProvider(),
  template: "<App/>"
});
