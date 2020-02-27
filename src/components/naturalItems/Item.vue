

<template>
  <div class="item" v-show="!destroyed">
    <div v-show="showOptions" v-on:click="chop">{{optionName}}</div>
    <div v-on:click="clicked">
    <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "Item",
  props: {
      name:String,
      optionName:String,
      itemsDropped:Array,
      maxHealth:Number,
      staminaCost:Number
  },
  data() {
    return {
      showOptions: false,
      destroyed:false,
      health:this.maxHealth
    };
  },
  methods: {
    clicked() {
      this.showOptions = true;
    },
    chop() {
      if(this.health === 0)
        return;
      this.decreaseStamina(1);
      this.addMultipleToInventory(this.itemsDropped);
      this.showOptions = false;
      this.health--;
      if(this.health === 0){
        this.destroyed = true;
      }
    },
    ...mapMutations("game", ["addMultipleToInventory", "decreaseStamina"])
  }
};
</script>
<style scoped>
</style>
