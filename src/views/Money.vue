<template>
  <Layout class-prefix="layout">
    <Tags :selected.sync="record.tags" />
    <Notes :value.sync="record.notes" filedName="备注" placeholder="请输入备注" class="notes" />
 
    <Tab :data-source="recordTypeList" classPrefix="money" :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
  </Layout>
</template>

<script lang="ts">
import Tags from "@/components/money/tags.vue";
import Notes from "@/components/money/notes.vue";
import Tab from "@/components/tabs.vue"
import NumberPad from "@/components/money/numberPad.vue";
import recordTypeList from '@/constants/typeList.ts';
import Vue from "vue";


import { Component } from "vue-property-decorator";


@Component({ components: { Tags, Notes, Tab, NumberPad } })
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordTypeList = recordTypeList
  saveRecord() {
    // store2.createRecords(this.record);
    this.$store.commit("createRecords", this.record);
  }
  created(){
    this.$store.commit('fetchRecords')
  }
}
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



.notes {
  background: #f3f3f3;
  padding: 12px 0;
}
</style>
