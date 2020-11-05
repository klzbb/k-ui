<template>
  <div class="layout_a">
    <div class="layout_a_navs">
      <div @click="doc('1')">指南</div>
      <div @click="doc('2')">组件</div>
    </div>
    <div>
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  name:"LayoutA",
  methods:{
    doc(type){
     
      const condition = {
        '1': () => {
          this.$router.push({
            name:"Guide"
          })
        },
        '2': () => {
          this.$router.push({
            name:"Components"
          })
        }
      }
      condition[type]();
    }
  }
}
</script>
<style lang="scss">
.layout_a{
  &_navs{
    display: flex;
    flex-direction: row;
  }
}
</style>