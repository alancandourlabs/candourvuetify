<template>
  <v-app>
    <v-main>
      <div id="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/bootstrap-vue/src/index.scss';
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.title {
  font-family: 'Montserrat', sans-serif;
}

.nav-link {
  text-decoration: none;
}

.app {
  display: unset;
  justify-content: space-around;
}

</style>