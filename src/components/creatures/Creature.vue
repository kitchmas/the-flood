<template>
  <div class="item" v-show="!destroyed">
    <div v-show="showOptions" v-on:click="attack">{{optionName}}</div>
    <div v-on:click="clicked">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  name: "Creature",
  props: {
    name: String,
    optionName: String,
    maxHealth: Number,
    itemsDropped: Array,
    damage: Number
  },
  computed: {
    ...mapState("game", ["selectedWeapon"])
  },
  data() {
    return {
      showOptions: false,
      heath: this.maxHealth,
      destroyed: false
    };
  },
  methods: {
    ...mapMutations("game", ["playerAttacked", "addMultipleToInventory"]),
    clicked() {
      this.showOptions = true;
    },
    attack() {
      this.showOptions = false;
      this.heath -= this.selectedWeapon.damage;
      if (this.heath !== 0) {
        this.playerAttacked(1);
      } else {
        this.destroyed = true;
        this.addMultipleToInventory(this.itemsDropped);
      }
    }
  }
};
</script>
<style scoped>
</style>