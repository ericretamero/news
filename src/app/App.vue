<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <v-content class="mx-auto">
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HeaderComponent from "./core/components/HeaderComponent";
export default {
  name: "app",
  components: { HeaderComponent }
};
</script>

<style >
li {
  list-style-type: none;
}
.v-application ul {
  padding: 0 !important;
}
</style>

