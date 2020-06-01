<template>
  <div>
    <search-toolbar></search-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import SearchToolbar from "./SearchToolbar";

export default {
  components: { SearchToolbar }
};
</script>
