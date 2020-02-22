<template>
    <div class="location">
        <!-- <div class="top">{{currentLocation.name}}</div> -->
        <div class="middle">
        <Component :is="currentLocation.items[0].name"></Component>
        </div>
        <div class="bottom earth"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Tree from "../naturalItems/Tree.vue"

export default {
    name:"Location",
    components:{Tree},
    data:function(){
        return{
            tree:"Tree"
        }
    },
    computed:{
        ...mapState("game",["currentLocation"])
    }
}
</script>
<style scoped>
.location{
    height: 100%;
     display: flex;
     flex-direction: column;
  justify-content: stretch;
}

.location div{
    display: flex;
    flex: 1;
}

.location .top{
flex: 0;
}

.location .middle .item{
    margin-top: auto; 
}


.location .earth{
    background: black;
}
</style>