import Icon from '@/components/icons.vue';
<template>
  <Layout>
    <div class="navBar">
      <Icon class="left-Icon" iconName="left" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div>
      <Notes class="form-wrapper" filedName="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
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

@Component({ components: { Icon, Notes, Button } })
export default class Edit extends Vue {
  created() {
    const t = this.$route.params.userId;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(item => item.id === t)[0];
    console.log("xxxx");
    if (tag) {
      console.log(tag);
    } else {
      this.$router.push("/404");
    }
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
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>