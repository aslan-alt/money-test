<template>
  <Layout>
    <Tab :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
    <Tab :data-source="intervalList" :value.sync="interval" class="xxxx" class-prefix="interval" height="28px"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Tab from "@/components/tabs.vue";
import intervalList from "@/constants/intervalList.ts";
import recordTypeList from "@/constants/typeList.ts";
@Component({ components: { Tab } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
<style lang="scss" scoped>
::v-deep .interval-item {
  
  background: white;
  border: 1px solid red;
  font-size: 16px;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>