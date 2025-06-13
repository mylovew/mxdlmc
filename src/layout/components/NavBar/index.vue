<template>
  <div class="drawer">
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="menuIsOpen"
      @change="menuIsOpen = !menuIsOpen"
    />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side z-10 drawer-end" :class="{ 'drawer-open': menuIsOpen }">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li class="m-2" v-for="(item, index) in menuTop" :key="index">
          <div
            v-if="item.icon === 'conn'"
            @click="copyText"
            class="rainbow-card card max-w-40 h-12 bg-base-200 shadow-xl rounded-1xl overflow-hidden"
          >
            <div class="w-full flex items-center h-100">
              <el-icon v-if="item.icon === 'home'" size="20"><HomeFilled /></el-icon>
              <el-icon v-if="item.icon === 'info'" size="20"><InfoFilled /></el-icon>
              <el-icon v-if="item.icon === 'conn'" size="20"><Connection /></el-icon>
              <el-icon v-if="item.icon === 'menu'" size="20"><Menu /></el-icon>
              <span class="card-title text-base font-bold">&nbsp;&nbsp;{{ item.name }}</span>
            </div>
          </div>
          <div
            v-else
            @click="jump(item.path)"
            class="rainbow-card card max-w-40 h-12 bg-base-200 shadow-xl rounded-1xl overflow-hidden"
          >
            <div class="w-full flex items-center h-100">
              <el-icon v-if="item.icon === 'home'" size="20"><HomeFilled /></el-icon>
              <el-icon v-if="item.icon === 'info'" size="20"><InfoFilled /></el-icon>
              <el-icon v-if="item.icon === 'conn'" size="20"><Connection /></el-icon>
              <el-icon v-if="item.icon === 'menu'" size="20"><Menu /></el-icon>
              <span class="card-title text-base font-bold">&nbsp;&nbsp;{{ item.name }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="w-95/100 mt-8 mb-8 m-auto">
    <div class="navbar bg-base-300 shadow-lg rounded-xl h-24">
      <div class="navbar-start">
        <div class="dropdown" @click="menuOpen()">
          <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div class="ml-2 hidden sm:flex">
            <div class="avatar mr-2">
              <div class="mask rounded-xl w-10">
                <img src="@/assets/logo/logo.png" />
              </div>
            </div>
            <!--            <a class="card-title text-base font-bold">冒险大陆</a>-->
          </div>
        </div>
      </div>

      <div class="navbar-center hidden sm:flex">
        <ul class="menu menu-horizontal">
          <li class="m-2" v-for="(item, index) in menuTop" :key="index">
            <div
              v-if="item.icon === 'conn'"
              @click="copyText"
              class="rainbow-card card max-w-40 h-12 bg-base-200 shadow-xl rounded-1xl overflow-hidden"
            >
              <div class="w-full flex items-center justify-center text-center h-100">
                <el-icon v-if="item.icon === 'home'" size="20"><HomeFilled /></el-icon>
                <el-icon v-if="item.icon === 'info'" size="20"><InfoFilled /></el-icon>
                <el-icon v-if="item.icon === 'conn'" size="20"><Connection /></el-icon>
                <el-icon v-if="item.icon === 'menu'" size="20"><Menu /></el-icon>
                <span class="card-title text-base font-bold">&nbsp;&nbsp;{{ item.name }}</span>
              </div>
            </div>
            <div
              v-else
              @click="jump(item.path)"
              class="rainbow-card card max-w-40 h-12 bg-base-200 shadow-xl rounded-1xl overflow-hidden"
            >
              <div class="w-full flex items-center justify-center text-center h-100">
                <el-icon v-if="item.icon === 'home'" size="20"><HomeFilled /></el-icon>
                <el-icon v-if="item.icon === 'info'" size="20"><InfoFilled /></el-icon>
                <el-icon v-if="item.icon === 'conn'" size="20"><Connection /></el-icon>
                <el-icon v-if="item.icon === 'menu'" size="20"><Menu /></el-icon>
                <span class="card-title text-base font-bold">&nbsp;&nbsp;{{ item.name }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="navbar-center sm:hidden">
        <!--        <div class="avatar mr-2">-->
        <!--          <div class="mask mask-squircle w-10">-->
        <!--            <img src="@/assets/logo/logo.png" />-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <a class="card-title text-2xl font-bold">冒险大陆</a>-->
        <img class="w-30" src="@/assets/logo/logo_font.png" />
      </div>
      <div class="navbar-end">
        <!-- 主题切换开关 -->
        <label class="swap swap-rotate m-4">
          <!-- 隐藏的 checkbox -->
          <input type="checkbox" class="theme-controller" :checked="isDark" @change="toggleTheme" />

          <!-- 太阳图标 (亮主题) -->
          <svg
            class="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- 月亮图标 (暗主题) -->
          <svg
            class="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { HomeFilled, InfoFilled, Connection, Menu } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useClipboard } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useInfoConfigStore } from '@/store/modules/infoConfig.js'
import { storeToRefs } from 'pinia'
const infoConfigStore = useInfoConfigStore()
const { infoConfig } = storeToRefs(infoConfigStore)
console.log('2', infoConfig.value.footer)
const router = useRouter()
const source = ref('mxdlmc.top')
const { text, copy, copied, isSupported } = useClipboard({ source })

const copyText = () => {
  copy(source.value)
  menuIsOpen.value = false
  ElMessage.success('服务器地址已复制到剪切板!')
}

//跳转 router
const jump = (path) => {
  menuIsOpen.value = false
  if (path.indexOf('http') === 0) {
    //跳转外链
    window.open(path)
    return
  }
  router.push(path)
}

const menuTop = ref([
  {
    name: '首页',
    icon: 'home',
    path: '/home'
  },
  {
    name: '服务器细则',
    icon: 'info',
    path: '/readme'
  },
  {
    name: '服务器地址',
    icon: 'conn',
    path: '/home'
  },
  {
    name: '玩法教程',
    icon: 'menu',
    path: 'https://www.yuque.com/u55930110/tdsxeq'
  }
])

//菜单
const menuIsOpen = ref(false)
const menuOpen = () => {
  console.log('menuOpen')
  menuIsOpen.value = true
}
const isDark = ref(false)

// 初始化主题
const initTheme = () => {
  // 从localStorage获取保存的主题设置
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    // 如果有保存的主题设置，使用它
    isDark.value = savedTheme === 'dark'
  } else {
    // 如果没有保存的设置，检查系统偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // 应用主题到HTML元素
  applyTheme()
}

// 应用主题
const applyTheme = () => {
  const htmlElement = document.documentElement
  if (isDark.value) {
    htmlElement.setAttribute('data-theme', 'dark')
  } else {
    htmlElement.setAttribute('data-theme', 'light')
  }
}

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value

  // 保存到localStorage
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')

  // 应用主题
  applyTheme()
}
// 监听系统主题变化
const watchSystemTheme = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    // 只有在没有用户手动设置时才跟随系统
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      applyTheme()
    }
  })
}

// 组件挂载时初始化
onMounted(() => {
  initTheme()
  watchSystemTheme()
})
</script>
<style scoped>
@keyframes rainbow-border {
  0% {
    border-color: #ff0000;
  }
  14.3% {
    border-color: #ff7f00;
  }
  28.6% {
    border-color: #ffff00;
  }
  42.9% {
    border-color: #00ff00;
  }
  57.1% {
    border-color: #0000ff;
  }
  71.4% {
    border-color: #4b0082;
  }
  85.7% {
    border-color: #9400d3;
  }
  100% {
    border-color: #ff0000;
  }
}
@keyframes rainbow-color {
  0% {
    color: red;
  }
  16% {
    color: orange;
  }
  33% {
    color: yellow;
  }
  50% {
    color: green;
  }
  66% {
    color: blue;
  }
  83% {
    color: indigo;
  }
  100% {
    color: red;
  }
}
.rainbowColorFont {
  animation: rainbow-color 20s infinite;
}

@keyframes rainbow-glow {
  0% {
    box-shadow:
      0 0 20px #ff000080,
      0 0 40px #ff000040;
  }
  14.3% {
    box-shadow:
      0 0 20px #ff7f0080,
      0 0 40px #ff7f0040;
  }
  28.6% {
    box-shadow:
      0 0 20px #ffff0080,
      0 0 40px #ffff0040;
  }
  42.9% {
    box-shadow:
      0 0 20px #00ff0080,
      0 0 40px #00ff0040;
  }
  57.1% {
    box-shadow:
      0 0 20px #0000ff80,
      0 0 40px #0000ff40;
  }
  71.4% {
    box-shadow:
      0 0 20px #4b008280,
      0 0 40px #4b008240;
  }
  85.7% {
    box-shadow:
      0 0 20px #9400d380,
      0 0 40px #9400d340;
  }
  100% {
    box-shadow:
      0 0 20px #ff000080,
      0 0 40px #ff000040;
  }
}

.rainbow-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 0 solid;
  animation: rainbow-border 3s linear infinite;
}

.rainbow-card:hover {
  transform: scale(1.1);
  animation:
    rainbow-border 1.5s linear infinite,
    rainbow-glow 1.5s linear infinite;
}

.rainbow-card::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #9400d3,
    #ff0000
  );
  background-size: 400% 400%;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  animation: gradient-shift 3s ease infinite;
}

.rainbow-card:hover::before {
  opacity: 0.3;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
