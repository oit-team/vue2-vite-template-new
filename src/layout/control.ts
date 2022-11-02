import { ref, watch } from 'vue'

export const collapse = ref(false)

export const toggleCollapse = () => {
  collapse.value = !collapse.value
}

try {
  const cache = sessionStorage.getItem('collapse')
  if (cache) collapse.value = !!JSON.parse(cache)
}
catch {
  // ignore
}

// 缓存值
watch(collapse, () => sessionStorage.setItem('collapse', JSON.stringify(collapse.value)))
