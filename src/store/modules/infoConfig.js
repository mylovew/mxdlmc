import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInfoConfigStore = defineStore(
  'infoConfig',
  () => {
    const infoConfig = ref({
      menuList: [],
      bannerList: [],
      sceneryList: [],
      footer: {
        mdUrl: ''
      }
    })

    const loadInfoConfig = async () => {
      try {
        const response = await fetch('/config.json')
        if (!response.ok) {
          console.error('Network response was not ok')
        }
        infoConfig.value = await response.json()
      } catch (error) {
        console.error('Failed to fetch JSON:', error)
      }
    }
    //返回，外部访问
    return {
      infoConfig,
      loadInfoConfig
    }
  },
  {
    persist: true // 开启持久化
  }
)
