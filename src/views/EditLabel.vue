import Icon from '@/components/icons.vue';
<template>

    <Layout>
      <Icon iconName="left" />
      <Notes filedName="标签名" placeholder="请输入标签名"/>
    </Layout>

</template>

<script lang="ts">
import Icon from '@/components/icons.vue';
import Notes from '../components/money/notes.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel.ts';

@Component({components:{Icon,Notes}})
export default class Edit extends Vue{

  created(){
    const t = this.$route.params.userId
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter(item=>item.id===t)[0]
    console.log('xxxx')
    if(tag){
      console.log(tag)
    }else{
      this.$router.push('/404')
    }
  }
} 

</script>

<style lang="scss" scoped>

</style>