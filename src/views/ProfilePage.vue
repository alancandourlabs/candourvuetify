<template>
  <div>
    <v-container>
      <Appbar />
      <v-row>
        <v-col>
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">CONTENT</div>
                <v-list-item-subtitle
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">CONTACTS</div>
                <v-list-item-title class="headline mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn @click="notification = !notification" outlined rounded text> Notify </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="notification"
        absolute
        bottom
        color="success"
        outlined
        right
      >
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
        You have a message from Alan Avins.
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Appbar from "../components/Appbar.vue";

export default {
  name: "ProfilePage",
  data: () => ({
    notification: false
  }),
  components: {
    Appbar,
  },
};
</script>
