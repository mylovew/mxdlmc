<script setup>
import { storeToRefs } from 'pinia'
import { useInfoConfigStore } from '@/store/modules/infoConfig.js'
const infoConfigStore = useInfoConfigStore()
const { infoConfig } = storeToRefs(infoConfigStore)
</script>

<template>
  <div class="bg-base-300 pt-10">
    <div class="">
      <div
        class="pt-1 text-center text-1xl font-bold"
        v-for="item in infoConfig.footerInfo.content"
      >
        {{ item }}
      </div>
    </div>
    <div class="text-center text-sm pt-1 pb-8">
      <div></div>
      <div class="m-5">{{ infoConfig.footerInfo.copyright }}</div>
    </div>
  </div>
</template>

<style scoped></style>
