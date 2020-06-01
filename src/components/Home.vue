<template>
  <v-container>
    <v-layout row="row" wrap="wrap">
      <v-flex>
        <div class="d-flex flex-row justify-space-between mb-12">
          <h1>Headlines</h1>
          <filter-drop-down></filter-drop-down>
        </div>
      </v-flex>
      <v-flex xs12="xs12">
        <all-listings :currentPage="1" :itensPerPage="6"></all-listings>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AllListings from "../components/listing/AllListings.vue";
import FilterDropDown from "../components/FilterDropDown";

export default {
  name: "home",
  components: {
    AllListings,
    FilterDropDown
  }
};
</script>
