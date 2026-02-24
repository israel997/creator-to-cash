import { ref, watch } from 'vue'

const userName = ref(localStorage.getItem('userName') || '')

watch(userName, (newName) => {
  if (newName) {
    localStorage.setItem('userName', newName)
  }
})

export function useUserName() {
  const setUserName = (name) => {
    userName.value = name
  }

  const clearUserName = () => {
    userName.value = ''
    localStorage.removeItem('userName')
  }

  return {
    userName,
    setUserName,
    clearUserName
  }
}
