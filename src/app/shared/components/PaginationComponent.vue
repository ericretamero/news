<template>
  <v-container>
    <v-pagination :value="page" :total-visible="totalVisible" :length="length" @input="onChange"></v-pagination>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "PaginationComponent",
  props: ["length", "index"],
  computed: {
    ...mapState({
      totalVisible: state => state.pagination.totalVisible,
      page: state => state.pagination.page
    })
  },
  methods: {
    ...mapActions({
      onSelectPage: "pagination/change"
    }),
    onChange(page) {
      this.onSelectPage(page);
      this.$emit("change", this.page);
    }
  },
  mounted() {
    this.onSelectPage(this.index);
  }
};
</script>