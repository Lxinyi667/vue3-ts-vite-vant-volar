<script setup lang="ts">
  import {inject,reactive} from 'vue'
  import {personAdvantage} from '@/api/my'
  import {Toast} from 'vant'
  import {myStore} from '@/store/my'
  const {closeChange} = inject('popup') as any
  const store:any = myStore()
  const state = reactive({
    value: ''
  })
  state.value = store.resumeInfo.advantage
  const submit = async () => {
    if(!state.value){
        Toast('请输入个人优势')
        return
    }
    const res = await personAdvantage({
        "advantage": state.value
    })
    if(res){
        closeChange()
        Toast('保存成功')
    }else{
        Toast('保存失败')
    }
  }
</script>
<template>
    <van-nav-bar title="个人优势" left-arrow @click-left="closeChange"/>
    <van-field
        v-model="state.value"
        rows="12"
        autosize
        label=""
        type="textarea"
        maxlength="500"
        placeholder="请输入您的个人优势"
        show-word-limit
    />
    <button class="wy-submit" @click="submit">保存</button>
</template>