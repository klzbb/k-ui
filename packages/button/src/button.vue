<template>
  <div class="k_button" @click="click">
    {{test}}
     我是按钮
  </div>
</template>
<script>
export default {
  name:"KButton",
  data(){
    return {
      test:1
    }
  },
  methods:{
    click(){
      this.test++
    }
  }
}
</script>
<style lang="scss">
.k_button{
  width: 100px;
  height: 40px;
  background-color: red;
}
</style>