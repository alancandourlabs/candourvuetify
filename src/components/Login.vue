<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-card elevation="10" >
          <v-col>
            <v-text-field label="Username" hide-details="auto"></v-text-field>
            <v-text-field label="Password"></v-text-field>
            <router-link class="nav-link" :to="{name: 'Profile'}">
            <v-btn block>
              Login
              <v-icon right>mdi-login</v-icon>
            </v-btn>
            </router-link>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data: () => ({

  }),
};
</script>

