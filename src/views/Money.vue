<template>
  <Layout class-prefix="layout">
    <Tags />
    <Notes />
    <Types :xxx="333"/>
    <NumberPad />
  </Layout>
</template>

<script>
import Tags from "@/components/money/tags.vue";
import Notes from "@/components/money/notes.vue";
import Types from "@/components/money/types.vue";
import NumberPad from "@/components/money/numberPad.vue";
export default {
  name: "Money",
  components: {
    Tags,
    Notes,
    Types,
    NumberPad
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
