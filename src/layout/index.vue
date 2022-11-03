<script setup>
import Aside from './Aside.vue'
import Header from './Header.vue'
import Main from './Main.vue'
</script>

<template>
  <ElContainer class="h-full" direction="vertical">
    <Header />
    <ElContainer class="overflow-hidden">
      <Aside />
      <Main />
    </ElContainer>
  </ElContainer>
</template>
