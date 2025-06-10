<template>
  <div class="bg-base-100 w-95/100 sm:w-90/100 md:85/100 lg:80/100 mt-8 m-auto mb-10">
    <!-- 方式1: 直接传入 Markdown 内容 -->
    <section>
      <MarkdownRenderer :content="markdownText" @loaded="onLoaded" @error="onError" />
    </section>

    <!-- 方式2: 加载本地文件 -->
    <section>
      <MarkdownRenderer
        :file-path="'/README.md'"
        @loaded="onFileLoaded"
        @error="onError"
        :highlight="false"
      />
    </section>

    <!-- 方式3: 禁用代码高亮 -->
    <!--    <section>-->
    <!--      <h2>禁用代码高亮</h2>-->
    <!--      <MarkdownRenderer :content="codeExample" :highlight="false" />-->
    <!--    </section>-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MarkdownRenderer from '@/components/MarkdownRenderer'

const markdownText = ref('')

const codeExample = ref(`
\`\`\`javascript
// 这个代码块不会被高亮
const message = 'Hello World'
console.log(message)
\`\`\`
`)

const onLoaded = (content) => {
  console.log('Markdown loaded:', content.length, 'characters')
}

const onFileLoaded = (content) => {
  console.log('File loaded:', content.length, 'characters')
}

const onError = (error) => {
  console.error('Load error:', error)
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
