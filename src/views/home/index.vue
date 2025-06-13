<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useInfoConfigStore } from '@/store/modules/infoConfig.js'
const infoConfigStore = useInfoConfigStore()
const { infoConfig } = storeToRefs(infoConfigStore)
const carouselHeight = ref('0px')

function onresize() {
  let winWidth = window.innerWidth
  // 这里图片高宽比是 4: 25
  carouselHeight.value = (9 / 16) * winWidth + 'px'
}
onMounted(() => {
  onresize()
  window.addEventListener('resize', onresize)
})
</script>

<template>
  <el-carousel :height="carouselHeight">
    <el-carousel-item v-for="(item, index) in infoConfig.banner" :key="index">
      <img :src="item" class="w-full h-auto" />
    </el-carousel-item>
  </el-carousel>
  <div class="w-95/100 sm:w-90/100 md:85/100 lg:80/100 m-auto mt-20 mb-20">
    <div class="bg-base-100 dark:bg-base-300 shadow-md rounded-2xl p-6">
      <div class="pt-1 text-center text-2xl font-bold">{{ infoConfig.scenery.title }}</div>
      <div class="container mx-auto">
        <div class="mt-6 flex flex-wrap">
          <div
            class="relative group w-full sm:w-1/2 md:w-1/3 p-2"
            v-for="(item, index) in infoConfig.scenery.imgUrls"
            :key="index"
          >
            <img
              class="w-full h-auto rounded-2xl transition duration-300 ease-in-out group-hover:scale-110"
              :src="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-95/100 sm:w-90/100 md:85/100 lg:80/100 mt-8 m-auto mb-10">
    <div class="p-6">
      <div class="pt-1 text-center text-2xl font-bold">{{ infoConfig.cardInfo.title }}</div>
      <div class="container mx-auto">
        <div class="mt-6 flex flex-wrap">
          <div
            class="w-full sm:w-1/2 md:w-1/3 p-2"
            v-for="(item, index) in infoConfig.cardInfo.info"
            :key="index"
          >
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img :src="item.imgUrl" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{{ item.title }}</h2>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-80/100 sm:w-75/100 md:1/2 m-auto mb-20">
    <div class="p-6">
      <div class="pt-1 text-center text-2xl font-bold">{{ infoConfig.joinInfo.title }}</div>
      <div class="container mx-auto">
        <div class="mt-6 flex flex-wrap">
          <div
            class="w-full sm:w-1/2 p-2"
            v-for="(item, index) in infoConfig.joinInfo.info"
            :key="index"
          >
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img :src="item.imgUrl" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{{ item.title }}</h2>
                <p v-html="item.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
