<template>
  <div class="location">
    <div class="top">{{currentLocation.name}}</div>
    <div class="middle">
      <Component
        v-for="item in currentLocation.items"
        v-bind:key="item.id"
        :is="item.name"
        :size="item.size"
      ></Component>
    </div>
    <div class="bottom earth"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Tree from "../naturalItems/Tree.vue";
import Plant from "../naturalItems/Plant.vue";

export default {
  name: "Location",
  components: { Tree, Plant },
  data: function() {
    return {
      tree: "Tree"
    };
  },
  computed: {
    ...mapState("game", ["currentLocation"])
  }
};
</script>
<style scoped>
.location {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.location .middle {
  display: flex;
  flex: 1;
}

.location .top {
  flex: 0;
}

.location .middle{
  background: lightblue;
}

.location .middle .item {
  margin-top: auto;
}

.location .earth {
  flex: 0 100px;
  background: black;
}
</style>