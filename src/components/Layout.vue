<template>
  <div class="container">
    <div class="viwe" :class="classPrefix&&`${classPrefix}-content`">
      <slot />
    </div>
    <Nav class="nav" />

  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
export default {
  name: "Layout",
  props:['classPrefix'],
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.container{
  
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  .viwe{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: auto;
  }
  .nav{

  }
}
</style>