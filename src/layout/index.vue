<script setup>
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import Footer from './components/Footer'
import { useInfoConfigStore } from '@/store/modules/infoConfig.js'
const infoConfigStore = useInfoConfigStore()
infoConfigStore.loadInfoConfig()
</script>

<template>
  <NavBar />
  <AppMain />
  <Footer />
</template>

<style scoped></style>
