
<template>
  <div>
    <Layout>
      <div>
        <ul class="tags">
          <router-link v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
            <li>
              <span>{{tag.name}}</span>
              <Icon iconName="right" class="right" />
            </li>
          </router-link>
        </ul>
      </div>
      <div class="createTag-wrapper">
        <Button @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Icon from "@/components/icons.vue";
import Button from "@/components/Button.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mixins } from 'vue-class-component';
import TagHelper from '@/minxins/tagHelper.ts';

@Component({
  components: { Icon, Button },
  computed: {
    tags(){
      return this.$store.state.tagList;
    }
  }
})
export default class Label extends mixins(TagHelper) {
  created(){
    this.$store.commit("fetchTags");
  }
  
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  padding-left: 16px;
  color: #333;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    box-shadow: inset 0 -3px 2px -3px rgba($color: #0000, $alpha: 0.6);
    .right {
      width: 24px;
      height: 24px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>