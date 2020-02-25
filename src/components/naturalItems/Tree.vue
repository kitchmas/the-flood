<template>
  <div class="item">
    <Item name="Tree" optionName="Chop" :itemsDropped="itemsDropped" :maxHealth="health" :staminaCost="staminaCost">
      <img src="../../assets/tree.128.png" alt />
    </Item>
  </div>
</template>
<script>
import Item from "./Item.vue"; 

export default {
  name: "Tree",
  components: {
    Item
  },
  props: {
    size: String
  },
  data() {
    return {
      itemsDropped: [{ id: 4, name: "wood", quantity: 1 }],
      health: 3,
      staminaCost:1
    };
  }
};
</script>
<style scoped>
</style>