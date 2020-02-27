<template>
  <nav>
    <router-link to="/label" class="item" active-class="selected">
      <Icon iconName="label" class="icon" />标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon iconName="money" class="icon" />钱包
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon iconName="statistics" class="icon" />统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from "@/components/icons.vue";
export default {
  components: {
    Icon
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

  > .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    font-size: 14px;
    padding: 2px 0;
    .icon {
      width: 33px;
      height: 33px;
    }
    
  }
  >.item.selected{
    color: $color-highlight;
  }
}
</style>