<template>
  <svg @click="$emit('click',$event)">
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props: ["iconName"]
};
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
  overflow: hidden;
}

// .icon-wrap {
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   svg {
//     width: 2.5em;
//     height: 2.5em;
//     border: 1px solid red;
//     color: green;
//     use {
//     }
//   }
// }
</style>