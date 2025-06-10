<template>
  <div class="markdown-container">
    <div class="markdown-content" v-html="renderedMarkdown"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

// 引入highlight.js样式（可以选择不同主题）
import 'highlight.js/styles/github.css' // 或其他主题

const props = defineProps({
  // Markdown 内容
  content: {
    type: String,
    default: ''
  },
  // 本地文件路径
  filePath: {
    type: String,
    default: ''
  },
  // 是否启用代码高亮
  highlight: {
    type: Boolean,
    default: true
  },
  // 自定义配置
  options: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['loaded', 'error'])

const markdownContent = ref('')
const loading = ref(false)

// 配置 markdown-it
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (!props.highlight) return ''

    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<pre class="hljs"><code class="hljs language-${lang}">` +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        )
      } catch (__) {}
    }

    return `<pre class="hljs"><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`
  },
  ...props.options
})

// 渲染 Markdown
const renderedMarkdown = computed(() => {
  const content = props.content || markdownContent.value
  return content ? md.render(content) : ''
})

// 加载本地文件
const loadLocalFile = async (filePath) => {
  if (!filePath) return

  try {
    loading.value = true
    const response = await fetch(filePath)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()
    markdownContent.value = text
    emit('loaded', text)
  } catch (error) {
    console.error('Failed to load markdown file:', error)
    emit('error', error)
  } finally {
    loading.value = false
  }
}

// 监听文件路径变化
watch(
  () => props.filePath,
  (newPath) => {
    if (newPath) {
      loadLocalFile(newPath)
    }
  },
  { immediate: true }
)

// 组件挂载时加载文件
onMounted(() => {
  if (props.filePath) {
    loadLocalFile(props.filePath)
  }
})

// 暴露方法给父组件
defineExpose({
  loadFile: loadLocalFile,
  getMarkdownInstance: () => md
})
</script>

<style scoped>
@import 'tailwindcss';
/* Markdown 样式 */
.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
}

.markdown-content :deep(h1) {
  font-size: 2em;
  padding-bottom: 0.3em;
}

.markdown-content :deep(h2) {
  font-size: 1.5em;
  padding-bottom: 0.3em;
}

.markdown-content :deep(p) {
  margin-bottom: 1em;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: 1em;
  padding-left: 2em;
}

.markdown-content :deep(li) {
  margin-bottom: 0.25em;
}

.markdown-content :deep(blockquote) {
  margin: 1em 0;
  padding: 0 1em;
  border-left: 4px solid #dfe2e5;
  color: #6a737d;
}

.markdown-content :deep(table) {
  border-collapse: collapse;
  margin: 1em 0;
  width: 100%;
}

.markdown-content :deep(table th),
.markdown-content :deep(table td) {
  border: 1px solid #dfe2e5;
  padding: 0.5em 1em;
}

.markdown-content :deep(table th) {
  background-color: var(--color-base-300);
  font-weight: 600;
}

/* 代码块样式 */
.markdown-content :deep(pre) {
  background-color: #15191e;
  color: white;
  border-radius: 6px;
  padding: 1em;
  overflow-x: auto;
  margin: 1em 0;
}

.markdown-content :deep(code) {
  background-color: #15191e;
  color: white;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.85em;
}

.markdown-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
}

/* 链接样式 */
.markdown-content :deep(a) {
  color: #0366d6;
  text-decoration: none;
}

.markdown-content :deep(a:hover) {
  text-decoration: underline;
}

/* 图片样式 */
.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
