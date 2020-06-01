<template>
  <v-menu offset-y max-height="300">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Filter</v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in sources" :key="index" @click="getSource(item)">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { API_KEY } from "../config";

export default {
  computed: {
    sources() {
      return this.$store.state.source.sources;
    }
  },
  methods: {
    getSource(source) {
      this.fetchHeadlines(source.name);
    },
    fetchHeadlines(sourceName) {
      this.$http
        .get(`top-headlines?sources=${sourceName}&apiKey=${API_KEY}`)
        .then(resp => {
          this.$store.dispatch("fetch_headlines", resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
