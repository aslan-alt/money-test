<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">ok</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  @Prop() readonly value!: number;
  output = this.value.toString();
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const inupt = button.textContent!;
    if (this.output.length > 16) {
      return;
    }
    if (inupt === "." && this.output.indexOf(inupt) >= 0) {
      return;
    }
    if (this.output === "0") {
      if (inupt === ".") {
        this.output += inupt;
      } else {
        this.output = inupt;
      }
    } else {
      this.output += inupt;
    }
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      if (this.output[this.output.length - 2] === ".") {
        this.output = this.output.slice(0, -2);
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
  }
  clear(){
    this.output = "0";
  }
  ok(){
    this.$emit('update:value',parseFloat(this.output))
    this.$emit('submit')
    this.output = '0';
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade-out($color: #000000, $amount: 0.4),
      inset 0 5px 5px -5px fade-out($color: #000000, $amount: 0.4);
    height: 72px;
  }
  .buttons {
    @extend %clearFix;
    $color: #f2f2f2;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: $color;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($color, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($color, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13) {
        background: darken($color, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($color, 4 * 4%);
      }
      &:nth-child(14) {
        background: darken($color, 4 * 5%);
      }
      &:nth-child(12) {
        background: darken($color, 4 * 6%);
      }
    }
  }
}
</style>