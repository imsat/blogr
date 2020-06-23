<template>
  <div id="app">
    <header class="header">
      <div class="app-name">Blogr</div>
      <div v-if="authStatus" id="nav">
        <div>{{ user.name }}</div>
        <button class="auth-button" @click="logOut">Log Out</button>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["authStatus"])
  },
  methods: {
    ...mapActions(["logOut"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
