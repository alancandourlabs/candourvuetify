<template>
  <div class="nav-bar">
    <v-app-bar dense app color="gray" dark collapse-on-scroll>
      <v-spacer></v-spacer>
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-toolbar-title class="title">Alan Avins</v-toolbar-title>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Appbar",

  data: () => ({
    drawer: false,
  }),
};
</script>

<style scoped>
.nav-bar {
  text-align: center;
}
</style>