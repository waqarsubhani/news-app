<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase mr4">
      <span>News</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/history">History</v-btn>
    </v-toolbar-items>

    <search-toolbar></search-toolbar>
  </v-app-bar>
</template>

<script>
import SearchToolbar from "./SearchToolbar.vue";

export default {
  name: "header",
  components: { SearchToolbar }
};
</script>


<style lang="scss">
.no-background-hover {
  background-color: transparent !important;
}
</style>

