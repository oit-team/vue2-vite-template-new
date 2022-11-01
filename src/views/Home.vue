<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    message: 'Hello World!',
  }),
})
</script>

<template>
  <div>
    {{ message }}
    <ElButton>测试</ElButton>
  </div>
</template>
