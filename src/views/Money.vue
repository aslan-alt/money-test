<template>
  <Layout class-prefix="layout">
   
    <Tags :data-source.sync="tags" :selected.sync="record.tags" />
    
    <Notes @update:value="updateNotes" />
    <Types :value.sync="record.type" />
     
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
  </Layout>
</template>

<script lang="ts">
import Tags from "@/components/money/tags.vue";
import Notes from "@/components/money/notes.vue";
import Types from "@/components/money/types.vue";
import NumberPad from "@/components/money/numberPad.vue";
import Vue from "vue";
import model from '@/model/model.ts'
import tagListModel from '@/model/tagListModel.ts'
import { Component, Watch } from "vue-property-decorator";

const tagList = tagListModel.fetch()
console.log(tagList)
@Component({ components: { Tags, Notes, Types, NumberPad } })
export default class Money extends Vue {
  tags = tagList;
  recordList = model.fetch()
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  updateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const value = model.clone(this.record)
    this.recordList.push(value);
    
  }
  @Watch("recordList")
  onRecordChange() {
    model.save(this.recordList)
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
</style>
