<template>
  <section class="bg-[#0c1844] text-white py-16 px-5 text-center">
    <div class="max-w-3xl mx-auto">
      <div class="inline-block bg-accent text-gray-900 px-4 py-2 rounded-xl font-semibold text-base md:px-8 md:py-3 md:rounded-2xl md:text-xl mb-8 shadow-lg tracking-wide">
        FORMATION PRO
      </div>
      
      <h1 class="text-5xl md:text-6xl lg:text-6xl font-black leading-tight mb-7">
       CREATOR TO CASH
      </h1>
      
      <p class="text-lg md:text-xl leading-relaxed mb-10 opacity-95">
        Business Suit 3.0 + Accompagnement pro
      </p>

      <div class="bg-white/15 backdrop-blur-lg rounded-2xl p-8 mb-8">
        <div class="text-3xl line-through text-white decoration-red-600 decoration-2 opacity-100 font mb-2">75 000 FCFA</div>
        <div class="text-5xl md:text-6xl font-black text-accent mb-2">30 000 FCFA</div>
        <div class="text-base font-semibold uppercase tracking-wider mb-2">Offre limitée - Expire dans</div>
        <div class="text-2xl md:text-3xl font-bold text-red-500">{{ countdown }}</div>
      </div>

      <a href="https://formations-pro.mymaketou.store/products/devenir-pro-en-creation-de-contenu-ia" target="_blank" rel="noopener" class="bg-accent text-gray-900 text-base md:text-lg font-bold py-3 px-6 md:py-4 md:px-10 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-200 mb-4 inline-block">
        Je rejoins la formation maintenant
      </a>

      <p class="text-sm opacity-90">✓ Accès immédiat après paiement</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref('')
let intervalId = null

// Date fixe: jusqu'au 26 février 2026
const targetDate = new Date('2026-02-26T23:59:59').getTime()

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

onMounted(() => {
  calculateCountdown()
  intervalId = setInterval(calculateCountdown, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
</style>
