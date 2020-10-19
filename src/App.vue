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
.nav-link {
  text-decoration: none;
}

.app {
  display: unset;
  justify-content: space-around;
}
</style>