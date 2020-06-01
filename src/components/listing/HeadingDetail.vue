<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8">
                <div class="my-2">
                    <v-btn small color="primary" text @click="back">Back</v-btn>
                </div>
                <v-card>
                    <v-img
                    v-if="article.urlToImage"
                    :src="article.urlToImage"
                    height="250px"
                    ></v-img>
                    <v-card-title v-if="article.title">{{article.title}}</v-card-title>
                    <v-card-text v-if="article.description">
                        <div class="my-4 subtitle-1">
                            {{article.description}}
                        </div>
                        <div if="article.content">
                            {{article.content}}
                        </div>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Published Date</v-card-title>
                    <v-card-text>
                        <v-chip v-if="article.publishedAt">{{publishedDate(article.publishedAt)}}</v-chip>
                    </v-card-text>
                        
            
                </v-card>
            </v-col>
        </v-row>

    </v-container>
 
</template>

<script>
import moment from 'moment'

export default {
  name: "heading-detail",
  computed: {
    article() {
      return this.$store.state.headline.articles[this.$route.params["id"]];
    },
  },
  methods: {
    publishedDate(published) {
        return moment(published).format('D.MMM.YYYY')
    },
    back() {
         this.$router.back();
    }
  }
};
</script>
