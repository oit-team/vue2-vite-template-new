<script>
import { defineComponent } from 'vue'
import { toggleCollapse } from '@/layout/control'

export default defineComponent({
  data: () => ({
    message: 'Hello World!',
  }),
  methods: {
    test() {
      this.$message(this.message)
    },
  },
})
</script>

<template>
  <div>
    {{ message }}
    <ElButton @click="test()">
      测试
    </ElButton>
  </div>
</template>
