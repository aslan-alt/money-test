<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请输入备注" />
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    display: flex;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>