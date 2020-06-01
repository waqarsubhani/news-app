<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
const Header = () => import("@/components/Header");
import { API_KEY } from "./config";

export default {
  name: "App",
  created() {
    this.fetchAll();
    this.fetchSources();
  },
  methods: {
    fetchSources() {
      this.$http
        .get(`sources?apiKey=${API_KEY}`)
        .then(resp => {
          this.$store.dispatch("fetch_sources", resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchAll() {
      this.$store.dispatch("set_loader_headline", true);
      this.$http
        .get(`top-headlines?country=us&apiKey=${API_KEY}`)
        .then(resp => {
          this.$store.dispatch("set_loader_headline", false);
          this.$store.dispatch("fetch_headlines", resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  components: {
    Header
  }
};
</script>
<style>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
.slide-enter-active {
  animation: slide-in 0.3s ease;
}
.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>