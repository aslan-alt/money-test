
<template>
  <Layout>
    <div class="navBar">
      <Icon class="left-Icon" iconName="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div>
      <Notes
        :value="tag.name"
        @update:value="updateTag"
        class="form-wrapper"
        filedName="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Icon from "@/components/icons.vue";
import Notes from "../components/money/notes.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/model/tagListModel.ts";
import model from "@/model/model.ts";

@Component({ components: { Icon, Notes, Button } })
export default class Edit extends Vue {
  tag?: { id: string; name: string } = undefined;
  created() {
    const id = this.$route.params.userId;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(item => item.id === id)[0];
    console.log("xxxx");
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.push("/404");
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      tagListModel.remove(this.tag.id);
      window.alert("删除成功！三秒后自动返回");
      setTimeout(() => {
        this.$router.back();
      }, 3000);
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  display: flex;
  background: white;
  align-items: center;
  .left-Icon {
    width: 24px;
    height: 24px;
  }
  .title {
    flex-grow: 1;
  }
  .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>