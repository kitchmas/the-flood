
<template>
    <Creature class="creature" name="Fox" optionName="Attack" :itemsDropped="itemsDropped" :maxHealth="health" :staminaCost="staminaCost" :damage="damage">
      <img src="../../assets/fox.64.png" alt />
    </Creature>
</template>
<script>
import Creature from "./Creature.vue"; 

export default {
  name: "Fox",
  components: {
    Creature
  },
  props: {
    size: String
  },
  data() {
    return {
      itemsDropped: [{ id: "1FoxTail", name: "Fox Tail", quantity: 1 }],
      health: 3,
      damage:1,
      staminaCost:1
    };
  }
};
</script>
<style scoped>
</style>