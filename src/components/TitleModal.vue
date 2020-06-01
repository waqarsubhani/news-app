<template>
    <v-dialog persistent v-model="show" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Update Title</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-form ref="entryForm" @submit.prevent="save">
                                <v-textarea
                                    counter="200"
                                    :rules="titleRules"
                                    v-model="titleInput"
                                    label="Title*"
                                    required
                                ></v-textarea>
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click.prevent="show = false"
                    >Close</v-btn
                >
                <v-btn color="blue darken-1" text @click.prevent="save"
                    >Save</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "title-modal",
    props: {
        visible: {
            type: Boolean,
            default: false
        },
    },
    created() {
        this.$root.$on('setHeadline', (headline) => {
            this.titleInput = headline.title;
            this.index = headline.index
        })

    },
    data: function () {
        return {
            titleRules: [
                v => !!v || 'Field is required',
                v =>
                    (v || '').length <= 200 ||
                    'Title must be 200 characters or less'
            ],
            titleInput: '',
            index: 0
        }
    },

    computed: {
        show: {
            get () {
                return this.visible
            },
            set (value) {
                if (!value) {
                    this.$root.$emit('closeModal')
                }
            }
        },
        listings() {
            return this.$store.state.headline.articles;
        },
    },
    methods: {
        save () {
            if (this.$refs.entryForm.validate()) {
                //other codes
                this.updateTitle()
            }
        },
        updateTitle () {
            const article = { ...this.listings[this.index] }
            article.title = this.titleInput
            this.show = false
            this.$store.dispatch('update_headline', {article, index: this.index})
        }
    }
}
</script>
