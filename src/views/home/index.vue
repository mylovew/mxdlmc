<script setup>
import { ref, onMounted } from 'vue'
const imgCarousel = ref([
  {
    path: new URL(`@/assets/carousel/1.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/carousel/2.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/carousel/3.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/carousel/4.png`, import.meta.url).href
  }
])
const imgServer = ref([
  {
    path: new URL(`@/assets/scenery/1.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/scenery/2.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/scenery/3.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/scenery/4.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/scenery/5.png`, import.meta.url).href
  },
  {
    path: new URL(`@/assets/scenery/6.png`, import.meta.url).href
  }
])
const carouselHeight = ref(0)

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
    <el-carousel-item v-for="(item, index) in imgCarousel" :key="index">
      <img :src="item.path" class="w-full h-auto" />
    </el-carousel-item>
  </el-carousel>
  <div class="w-95/100 sm:w-90/100 md:85/100 lg:80/100 m-auto mt-20 mb-20">
    <div class="bg-base-100 dark:bg-base-300 shadow-md rounded-2xl p-6">
      <div class="pt-1 text-center text-2xl font-bold">服务器风景</div>
      <div class="container mx-auto">
        <div class="mt-6 flex flex-wrap">
          <div
            class="relative group w-full sm:w-1/2 md:w-1/3 p-2"
            v-for="(item, index) in imgServer"
            :key="index"
          >
            <img
              class="w-full h-auto rounded-2xl transition duration-300 ease-in-out group-hover:scale-110"
              :src="item.path"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-95/100 sm:w-90/100 md:85/100 lg:80/100 mt-8 m-auto mb-10">
    <div class="p-6">
      <div class="pt-1 text-center text-2xl font-bold">服务器介绍</div>
      <div class="container mx-auto">
        <div class="mt-6 flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img src="@/assets/card/1.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">服务器玩法</h2>
                <p>MCMMO，副本，星露谷，时装宠物，更多附魔，玩家公会等等</p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img src="@/assets/card/2.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">服务器配置</h2>
                <p>7950x整机+1T固态+64GB内存+100mbps带宽</p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img src="@/assets/card/3.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">服务器宗旨</h2>
                <p>我们的宗旨是-不删档-不跑路-无神权</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-80/100 sm:w-75/100 md:1/2 m-auto mb-20">
    <div class="p-6">
      <div class="pt-1 text-center text-2xl font-bold">加入我们</div>
      <div class="container mx-auto">
        <div class="mt-6 flex flex-wrap">
          <div class="w-full sm:w-1/2 p-2">
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img src="@/assets/join/qq.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">QQ群：963649113</h2>
                <p>
                  申请加群：
                  <a class="link" target="_blank" href="https://qm.qq.com/q/S9gT281OGk">一键加群</a>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 p-2">
            <div class="card bg-base-100 w-full shadow-lg">
              <figure>
                <img src="@/assets/join/bilibili.png" alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">哔哩哔哩：官方号</h2>
                <p>
                  去关注：
                  <a class="link" target="_blank" href="https://space.bilibili.com/123000034">
                    哔哩哔哩官方账号
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
