<template>
   <Tab :data-source="typelist" :value.sync="type"/>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop} from "vue-property-decorator";
import Tab from '@/components/tabs.vue'
import intervalList from '@/constants/intervalList.ts'
@Component({components:{Tab}})
export default class Types extends Vue {
  type = '-'
  typelist = intervalList
  
  @Prop(String)value!: string;
  @Prop(String)classPrefix?: string;
 

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