<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "App"
};
</script>


<style lang="scss">
@import "~@/assets/style/reste.scss";
@import "~@/assets/style/helper.scss";
body {
}
#app {
  line-height: 1.5;
  font-family: $font-hei;
  color: #333;
  font-size: 16px;
}
button,
input {
  font: inherit;
}
:focus {
  outline: none;
}

</style>
