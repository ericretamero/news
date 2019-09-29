<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col>
          <v-text-field v-model="name" label="tags"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn color="#1976d2" class="mr-4" @click="onSearch">Search</v-btn>
          <v-btn color="white" @click="onReset">Clean</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "NewsFilterComponent",
  data: () => {
    return {
      name: ""
    };
  },
  computed: {},
  methods: {
    onSearch() {
      this.$emit("filters", this.name);
    },
    onReset() {
      this.$refs.form.reset();
      this.$emit("filters");
    }
  }
};
</script>