<script setup>
import Footer from './Footer.vue'
</script>

<template>
  <ElContainer class="overflow-auto" direction="vertical">
    <ElMain class="bg-gray-100">
      <Transition name="el-fade-in">
        <RouterView />
      </Transition>
    </ElMain>
    <Footer />
  </ElContainer>
</template>
