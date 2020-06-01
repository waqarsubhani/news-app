<template>
  <v-container grid-list-md="grid-list-md">
    <v-layout wrap="wrap" v-if="isLoading">
      <loading-component></loading-component>
    </v-layout>
    <v-layout v-if="listings && listings.length && !isLoading" wrap="wrap">
      <v-flex v-for="(listing, index) in listings" xs12="xs12" sm6="sm6" md4="md4" :key="index">
        <v-card v-if="listing && listing.urlToImage">
          <v-img
            :src="listing.urlToImage"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :height="cardHeight"
          >
            <v-flex xs12 offset-xs9>
              <v-btn class="no-background-hover" @click="openHeadline(index)">
                <v-icon x-large class="mr-1">arrow_forward</v-icon>
              </v-btn>
            </v-flex>

            <v-card-title>{{publishedDate(listing.publishedAt)}}</v-card-title>
            <div @click.stop="showModal(listing.title, index)">
              <v-card-title class="headline font-weight-bold" v-text="listing.title"></v-card-title>
            </div>
            <v-card-text v-text="listing.description" class="text--primary"></v-card-text>
          </v-img>
        </v-card>
        <v-card v-else>
          <v-flex xs12 offset-xs9>
            <v-btn class="no-background-hover" @click="openHeadline(index)">
              <v-icon x-large class="mr-1">arrow_forward</v-icon>
            </v-btn>
          </v-flex>

          <v-card-title>{{publishedDate(listing.publishedAt)}}</v-card-title>
          <div @click.stop="showModal(listing.title, index)">
            <v-card-title class="headline font-weight-bold" v-text="listing.title"></v-card-title>
          </div>
          <v-card-text v-text="listing.content" class="text--primary"></v-card-text>
        </v-card>
      </v-flex>

      <title-modal :visible="showTitleModal" @close="showTitleModal = false" />
    </v-layout>
    <v-layout v-else wrap="wrap">
      <v-text v-if="!isLoading">No headlines to show</v-text>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
.no-background-hover {
  background-color: transparent !important;
}
</style>

<script>
import moment from "moment";
import TitleModal from "../TitleModal";
import LoadingComponent from "../Loading";

export default {
  name: "all-listings",
  created() {
    this.$root.$on("closeModal", () => {
      this.showTitleModal = false;
    });
  },
  data() {
    return {
      cardHeight: "400px",
      showTitleModal: false
    };
  },
  computed: {
    listings() {
      return this.$store.state.headline.articles;
    },
    isLoading() {
      return this.$store.state.headline.isLoading;
    }
  },
  methods: {
    closeModal() {
      this.showTitleModal = false;
    },
    openHeadline(index) {
      const article = this.$store.state.headline.articles[index];
      this.$store.dispatch("add_history_headline", article);
      this.$router.push(`/detail/${index}`);
    },
    showModal(title, index) {
      this.$root.$emit("setHeadline", { title, index });
      this.showTitleModal = true;
    },
    publishedDate(published) {
      return moment(published).format("D.MMM.YYYY");
    }
  },
  components: {
    TitleModal,
    LoadingComponent
  }
};
</script>
