<template>
  <transition name="fade">
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Bienvenue !</h2>
          <p class="text-gray-600">Pour une expérience personnalisée, comment souhaitez-vous être appelé ?</p>
        </div>
        
        <form @submit.prevent="handleSubmit">
          <div class="mb-6">
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Votre prénom</label>
            <input 
              id="name"
              v-model="name" 
              type="text" 
              placeholder="Ex: Israel"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-accent focus:outline-none transition-colors text-gray-900 font-medium"
              autofocus
              required
            />
          </div>
          
          <button 
            type="submit"
            class="w-full bg-accent hover:bg-accent/90 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 hover:shadow-lg"
          >
            Continuer
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserName } from '../composables/useUserName'

const { userName, setUserName } = useUserName()
const showModal = ref(false)
const name = ref('')

onMounted(() => {
  if (!userName.value) {
    showModal.value = true
  }
})

const handleSubmit = () => {
  if (name.value.trim()) {
    setUserName(name.value.trim())
    showModal.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
