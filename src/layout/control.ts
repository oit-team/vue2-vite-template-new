import { ref } from 'vue'

export const collapse = ref(false)

export const toggleCollapse = () => {
  collapse.value = !collapse.value
}
