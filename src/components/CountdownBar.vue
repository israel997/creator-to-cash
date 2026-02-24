<template>
  <div v-show="isVisible" class="fixed bottom-0 left-0 right-0 bg-gradient-to-br from-[#0c1844] to-blue-500 text-white py-4 px-5 shadow-2xl z-50 border-t-4 border-accent">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
      <div class="text-lg md:text-xl font-bold uppercase tracking-wide">
        On démarre dans
      </div>
      <div class="text-2xl md:text-3xl font-black text-accent">
        {{ countdown }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const countdown = ref('')
let intervalId = null

// Date fixe: jusqu'au 1er mars 2026
const targetDate = new Date('2026-03-01T00:00:00').getTime()

const calculateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    countdown.value = '00 jours 00h 00m 00s'
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  const pad = (num) => num.toString().padStart(2, '0')
  countdown.value = `${pad(days)} jours ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
}

const handleScroll = () => {
  // Obtenir la section ProblemsSection
  const problemsSection = document.querySelector('section')?.nextElementSibling
  if (problemsSection) {
    const rect = problemsSection.getBoundingClientRect()
    // Afficher la barre quand on a dépassé la fin de la section problèmes
    isVisible.value = rect.bottom <= window.innerHeight
  }
}

onMounted(() => {
  calculateCountdown()
  intervalId = setInterval(calculateCountdown, 1000)
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Vérifier la position initiale
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
</style>
