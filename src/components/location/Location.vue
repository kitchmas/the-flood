<template>
    <div>
        {{currentLocation.name}}
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"Location",
    computed:{
        ...mapState("game",["currentLocation"])
    }
}
</script>
<style scoped>

</style>