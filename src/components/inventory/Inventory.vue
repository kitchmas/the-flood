<template>
  <ul>
    <li v-for="item in inventory" v-bind:key="item.id">
        {{item.name}} x {{item.quantity}}
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "inventory",
  computed: {
    ...mapState("game",["inventory"])
  }
};
</script>
<style></style>