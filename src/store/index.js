// 1. 导入
import { createPinia } from 'pinia'

import persist from 'pinia-plugin-persistedstate' //导入持久化插件
// 2. 创建
const pinia = createPinia()

// 使用pinia插件
pinia.use(persist)
// 3. 导出
export default pinia
