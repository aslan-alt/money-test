<template>
  <div>
    <label class="notes">
      <span class="name">{{filedName}}</span>
      <input type="text" :placeholder="placeholder" v-model="value"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch, Prop} from 'vue-property-decorator';
@Component
export default class Notes extends Vue{
  value = ''
  @Prop({required:true})filedName!: string;
  @Prop({required:true})placeholder!: string;
  @Watch('value')
  onNotesChanged(value: string,oldvalue: string){
    this.$emit('update:value',value)
  }
}
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