<template>
  <div class="tags">
    <div class="current">
      <ul>
        <li
          v-for="(item,index) in tagList"
          :key="index"
          @click="toggle(item.id)"
          :class="selectedTags.indexOf(item.name)>=0&&'selected'"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="new">
      <button @click="createTag">新建标签</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

import idCreator from "@/lib/idCreator.ts";
import { mixins } from "vue-class-component";
// import store2 from '@/store/index2.ts';
import TagHelper from "@/minxins/tagHelper.ts";
// const tagHelper: any = require("@/minxins/tagHelper");

@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];
  toggle(tag: string) {
    for (const i in this.$store.state.tagList) {
      if (this.$store.state.tagList[i].id === tag) {
        const index = this.selectedTags.indexOf(
          this.$store.state.tagList[i].name
        );
        if (index >= 0) {
          this.selectedTags.splice(index, 1);
        } else {
          this.selectedTags.push(this.$store.state.tagList[i].name);
          this.$emit("update:selected", this.selectedTags);
        }
        break;
      }
    }
  }
  created() {
    this.$store.commit("fetchTags");
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