import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInfoConfigStore = defineStore(
  'infoConfig',
  () => {
    const infoConfig = ref({
      lofo: '',
      logoFont: '',
      menu: [],
      banner: [],
      scenery: { title: '', imgUrls: [] },
      cardInfo: { title: '', info: [{ title: '', content: '', imgUrl: '' }] },
      joinInfo: { title: '', info: [{ title: '', content: '', imgUrl: '' }] },
      footerInfo: {
        content: '',
        copyright: ''
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
