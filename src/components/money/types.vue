<template>
  <div>
    <ul class="types">
      <li @click="selectedType('-')" :class="value==='-'&&'selected'">支出</li>
      <li @click="selectedType('+')" :class="value==='+'&&'selected'">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop} from "vue-property-decorator";
@Component
export default class Types extends Vue {
  @Prop(String)value!: string;
  selectedType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unkon");
    }
    this.$emit('update:value',type)
  }

}


</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: black;
      }
    }
  }
}
</style>