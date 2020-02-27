<template>
  <div class="tags">
    <div class="current">
      <ul>
        <li
          v-for="(item,index) in dataSource"
          :key="index"
          @click="toggle(item.id)"
          :class="selectedTags.indexOf(item)>=0&&'selected'"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="new">
      <button @click="create">新建标签</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import tagListModel from "@/model/tagListModel.ts";
@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
      this.$emit("update:selected", this.selectedTags);
    }
  }
  create() {
    const name = window.prompt("请输入内容")!;
    if (name) {
      this.$emit("update:dataSource", [...this.dataSource!, name]);
      tagListModel.create(name);
      window.alert("创建成功");
    } else {
      if (name === '') {
        window.alert("内容不能为空哦");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  padding: 16px;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 30px;
  > .current {
    ul {
      display: flex;

      flex-wrap: wrap;
      align-content: center;
      max-height: 100px;
      overflow: auto;
    }
    $color: #d9d9d9;
    li {
      background: $color;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      line-height: 24px;
      margin-bottom: 5px;
      &.selected {
        background: darken($color, 25%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 5px;
    }
  }
}
</style>