<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center" align-content="center">
      <v-col cols="12" sm="4">
        <div class="centered">
          <h1 class="title" >Welcome</h1>
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <Login />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>

<style scoped>

.centered {
  display: table-cell;
  height: 80px;
  width: 400px;
  text-align: center;
  vertical-align: middle;
}
</style>