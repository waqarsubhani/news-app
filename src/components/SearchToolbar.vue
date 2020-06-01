<template>
  <v-toolbar>
    <v-spacer></v-spacer>
    <search-field></search-field>
  </v-toolbar>
</template>

<script>
import SearchField from "./SearchField.vue";

export default {
  name: "search-toolbar",
  components: { SearchField }
};
</script>
