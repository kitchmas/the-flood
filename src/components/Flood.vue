<template>
  <div class="frame">
    <h1>{{title}}</h1>
    {{health}}
    {{stamina}}
    <button  @click="attack(damage)">damage</button>
    {{damage}}
    <div id="game-wrapper"></div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'Flood',
   computed: {
    ...mapState({
      health: state => state.game.health,
      stamina: state  => state.game.stamina
    }),
    ...mapGetters('game', {
       damage: 'getHealthLost'
    })
  },
  methods:{
     ...mapMutations('game',{
      attacked: 'attacked' // map `this.add()` to `this.$store.commit('increment')`
    }),
    attack (damage) {
      this.attacked(damage);
    }
  },
  data:function(){
    return{
    title:"The Flood"
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}

#game-wrapper{
  height: 470px;
  width: 470px;
  margin: 0 auto;
  border: 2px solid black;
}

</style>
