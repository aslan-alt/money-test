<template>
  <Layout class-prefix="layout">
    <Tags :data-source.sync="tags" :selected.sync="record.tags" />
    <Notes :value.sync="record.notes" filedName="备注" placeholder="请输入备注" class="notes"/>
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
// console.log(tagList)
@Component({ components: { Tags, Notes, Types, NumberPad } })
export default class Money extends Vue {
  tags = tagList
  
  recordList = model.fetch()
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  saveRecord() {
    const value = model.clone(this.record)
    this.recordList.push(value);
  }
  @Watch("recordList")
  onRecordChange() {
    model.save(this.recordList)
  }
  @Watch("tags")
  onTagsChange(value: string[]) {
    console.log(value)
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
.notes{
  background: #f3f3f3;
  padding:12px 0;
}
</style>
