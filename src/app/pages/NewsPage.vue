<template>
  <v-container>
    <v-layout>
      <NewsFilterComponent v-on:filters="onApplyFilters"></NewsFilterComponent>
    </v-layout>
    <v-layout row>
      <v-row align="center" justify="center">
        <v-col md="4" lg="3" v-for="(item, index) in news" :key="index">
          <v-card class="mx-auto" color="#1976d2" item.id max-width="400" dark>
            <v-card-title>
              <span class="title font-weight-light">{{item.sectionName}}</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              <div class="headline mb-2">{{item.webTitle}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="onOpenLink(item.webUrl)">Read More</v-btn>
              <v-spacer></v-spacer>
              <span
                class="d-flex justify-content-end font-weight-light"
              >{{item.webPublicationDate | formatDate}}</span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout>
      <PaginationComponent
        :index="filters.page"
        :length="filters['page-size']"
        v-on:change="onChangePage"
      ></PaginationComponent>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import PaginationComponent from "./../shared/components/PaginationComponent";
import NewsFilterComponent from "./../components/NewsFilterComponent";
export default {
  name: "NewsPage",
  components: { PaginationComponent, NewsFilterComponent },
  computed: {
    ...mapGetters({
      news: "news/news"
    }),
    ...mapState({
      filters: state => state.news.filters
    })
  },
  methods: {
    ...mapActions({
      onUpdatePage: "news/updatePage",
      onUpdateName: "news/updateName",
      onUpdateFilters: "news/resetFilters",
      onUpdateNews: "news/getNews",
    }),
    onOpenLink(link) {
      window.open(link, "_blank");
    },
    onChangePage(page) {
      this.onUpdatePage(page);
      this.updateData();
    },
    onApplyFilters(filters) {
      if (filters) {
        this.onUpdateName(filters);
      } else {
        this.onUpdateFilters();
      }
      this.$store.dispatch("pagination/change", 1);
      this.updateData();
    },
    updateData() {
      this.onUpdateNews(this.filters);
    }
  },
  mounted() {
    this.updateData();
  },
  created() {}
};
</script>