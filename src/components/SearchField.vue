<template>
  <v-text-field placeholder="Search ..." v-model="searchTerm" @input="search" append-icon="search"></v-text-field>
</template>

<script>
import { API_KEY } from "../config";
import { debounce } from 'throttle-debounce'

export default {
  name: "search-field",
  data() {
    return {
      searchTerm: ""
    };
  },
  created() {
      this.fetchFilteredHeadlines = debounce(500, this.fetchFilteredHeadlines)
  },
  methods: {
    search() {
      this.fetchFilteredHeadlines()
    },
    fetchFilteredHeadlines() {
      if (!this.checkRouter()) {
        this.$router.push('/')
      }
      const url = this.searchTerm.length ? `top-headlines?q=${this.searchTerm}&apiKey=${API_KEY}` :  `top-headlines?country=us&apiKey=${API_KEY}`
      this.$http
          .get(url)
          .then(resp => {
              this.$store.dispatch("fetch_headlines", resp.data);
          })
          .catch(err => {
              console.log(err);
          });
    },
    checkRouter() {
      return this.$router.currentRoute.path === '/'
    }
  }
};
</script>
