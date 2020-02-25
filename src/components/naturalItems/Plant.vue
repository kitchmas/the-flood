

<template>
  <div class="item">
    <div v-show="showOptions" v-on:click="chop">Pick</div>
    <img v-show="!destroyed" v-on:click="clicked" src="../../assets/flower.32.png" />
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "Plant",
  props: {
    size: String
  },
  data() {
    return {
      showOptions: false,
      destroyed:false,
      health:1
    };
  },
  methods: {
    clicked() {
      this.showOptions = true;
    },
    chop() {
      this.decreaseStamina(1);
      this.addToInventory({ id: 5, name: "Plant", quantity: 1 });
      this.showOptions = false;
      this.health--;
      if(this.health === 0){
        this.destroyed = true;
      }
    },
    ...mapMutations("game", ["addToInventory", "decreaseStamina"])
  }
};
</script>
<style scoped>
</style>