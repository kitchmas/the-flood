
<template>
  <div class="item">
    <Item name="Plant" optionName="Pick" :itemsDropped="itemsDropped" :maxHealth="health" :staminaCost="staminaCost">
      <img src="../../assets/flower.32.png" alt />
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
      itemsDropped: [{ id: "1Plant", name: "Plant", quantity: 1 }],
      health: 1,
      staminaCost:1
    };
  }
};
</script>
<style scoped>
</style>