<template>
  <div>
    <label class="notes">
      <span class="name">{{filedName}}</span>
      <input type="text" :placeholder="placeholder" :value="value" @input="onNotesChanged($event.target.value)"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch, Prop} from 'vue-property-decorator';
@Component
export default class Notes extends Vue{
  @Prop({default:''}) value!: string;
  @Prop({required:true})filedName!: string;
  @Prop({required:true})placeholder!: string;
  
  onNotesChanged(value: string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: block;
  font-size: 14px;
  padding-left: 16px;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>