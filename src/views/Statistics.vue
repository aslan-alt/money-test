<template>
  <Layout>
    <Tab :data-source="recordTypeList" :value.sync="type" class-prefix="type" />
    <!-- <Tab :data-source="intervalList" :value.sync="interval" class-prefix="interval" height="28px" /> -->

    <div v-if="groupList.length>=1">
      <ol>
        <li v-for="group in groupList" :key="group.title">
          <div class="">
            <h3 class="title">{{beautify(group.title)}}<span>￥{{group.total}}</span></h3>
            
          </div>

          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{toString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}}</span>
            </li>
          </ol>
        </li>
      </ol>
    </div>
    <div v-else-if="groupList.length===0">无</div>
  </Layout>
</template>





<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Tab from "@/components/tabs.vue";
import intervalList from "@/constants/intervalList.ts";
import recordTypeList from "@/constants/typeList.ts";
import clone from "../model/clone";
import dayjs from "dayjs";

@Component({ components: { Tab } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;

  beautify(date: string) {
    if (date) {
      const day = dayjs(date);
      const now = dayjs();
      if (day.isSame(now, "day")) {
        return "今天";
      } else if (day.isSame(now.subtract(1, "day"), "day")) {
        return "昨天";
      } else if (day.isSame(now.subtract(2, "day"), "day")) {
        return "前天";
      } else if (day.isSame(now, "year")) {
        return day.format("M月D日");
      } else {
        return day.format("YYYY年M月D日");
      }
    }
  }
  toString(tags: []) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    if (recordList.filter(item => item.type === this.type).length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter(item => item.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    type Result = { title: string; total?: number; items: RecordItem[] }[];
    const result: Result = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]]
      }
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(current.createdAt).isSame(dayjs(last.title), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),

          items: [current]
        });
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });

    return result;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
}
</script>

<style lang="scss" scoped>
%item {
  padding: 0 16px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.group {
  border: 1px solid red;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: white;
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
    width: 15em;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
::v-deep .interval-item {
  background: white;
  border: 1px solid red;
  font-size: 16px;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>