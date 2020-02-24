<template>
  <div class="tags">
    <div class="current">
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
    <div class="new">
      <button>新建标签</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tags {
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
    li {
      background: #d9d9d9;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      line-height: 24px;
      margin-bottom: 5px;
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