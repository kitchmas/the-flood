<template>
  <div class="status">
    <div>{{date.day}}/{{date.month}}</div>
    <div>
       <div>Title</div>
    </div>
    <div>
      <div>H:{{health}}</div>
      <div>S:{{stamina}}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Status",
  computed: {
    ...mapState("game", ["date","health", "stamina"])
  }
};
</script>
<style scoped>
.status{
  display: flex;
  justify-content: space-between;
}
</style>