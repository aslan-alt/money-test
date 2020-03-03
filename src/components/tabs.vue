<template>
  <ul class="tabs">
    <li
      v-for="item in dataSource"
      :key="item.value"
      class="tabs-item"
      :style="{height:height}"
      :class="liClass(item)"
      @click="selectedType(item)"
    >{{item.text}}</li>
    <!-- <li @click="selectedType('+')"  :class="{selected:value==='+',[classPrefix+'-item']:classPrefix}">收入</li> -->
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
type DataSourseItem = { text: string; value: string };

@Component
export default class Types extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourseItem[];
  @Prop(String) value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({type:String,default:'64px'})height!: string;
  liClass(item: DataSourseItem){
      return {selected:item.value===this.value,[this.classPrefix+'-item']:this.classPrefix}
  }
  selectedType(item: DataSourseItem) {
      this.$emit('update:value',item.value)
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  &-item {
    
    display: flex;
    flex-grow: 1;
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