<template>
  <div class="item">
    <div class="tree" v-if="size === 'large'">
      <div>Tree</div>
      <div>Tree</div>
      <div>Tree</div>
      <div>Tree</div>
      <div>Tree</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tree",
  props: {
    size: String
  }
};
</script>
<style scoped>
.tree div{
    text-align: center;
    line-height: 100%;
}
.tree :nth-last-child(1){
 font-size: 6px;
}
.tree :nth-last-child(2){
 font-size: 28px;
}
.tree :nth-last-child(3){
 font-size: 18px;
}
.tree :nth-last-child(4){
 font-size: 12px;
}
.tree :nth-last-child(5){
 font-size: 6px;
}
</style>