<template>
  <ul>
    <li v-for="(item, index) in inventory" v-bind:key="item.id + index">
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