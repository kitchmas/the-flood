
<template>
    <Creature class="creature" name="Bird" optionName="Attack" :itemsDropped="itemsDropped" :maxHealth="health" :staminaCost="staminaCost" :damage="damage">
      <img src="../../assets/bird.32.png" alt />
    </Creature>
</template>
<script>
import Creature from "./Creature.vue"; 

export default {
  name: "Bird",
  components: {
    Creature
  },
  props: {
    size: String
  },
  data() {
    return {
      itemsDropped: [{ id: "1Feather", name: "Feather", quantity: 1 }],
      health: 1,
      damage:0,
      staminaCost:1
    };
  }
};
</script>
<style scoped>
</style>