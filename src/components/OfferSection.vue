<template>
  <section class="py-20 px-5 bg-gray-200">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        <span v-if="userName" class="text-blue-900">{{ userName }}</span><span v-if="userName">, v</span><span v-else>V</span>oici ce que vous recevez aujourd'hui
      </h2>
      
      <div class="bg-gray-50 border-4 border-primary rounded-3xl p-12">
        <div class="flex flex-col gap-5 mb-10">
          <div class="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-300">
            <div class="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900">Formation complète (Texte + Vidéo)</strong>
              <p class="text-gray-600">2 modules progressifs (+2h de contenu)</p>
            </div>
          </div>

          <div class="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-300">
            <div class="w-12 h-12 flex-shrink-0 bg-yellow-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900">10+ liens d'accès</strong>
              <p class="text-gray-600">Pour Sora, Veo 3, NotebookLM, Perplexity</p>
            </div>
          </div>

          <div class="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-300">
            <div class="w-12 h-12 flex-shrink-0 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900">2 ebooks complets</strong>
              <p class="text-gray-600">Contenant des stratégies que j'utilise</p>
            </div>
          </div>

          <div class="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-300">
            <div class="w-12 h-12 flex-shrink-0 bg-red-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900">Guide des erreurs à éviter</strong>
              <p class="text-gray-600">Les pièges courants avec l'IA</p>
            </div>
          </div>

          <div class="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-300">
            <div class="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900">Accès à vie</strong>
              <p class="text-gray-600">Revisionnez autant de fois que nécessaire</p>
            </div>
          </div>

          <div class="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-300">
            <div class="w-12 h-12 flex-shrink-0 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900">Mises à jour gratuites</strong>
              <p class="text-gray-600">Nouveaux outils et techniques ajoutés</p>
            </div>
          </div>
        </div>

        <div class="border-t-2 border-gray-300 pt-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div class="text-center p-6 bg-gray-200 rounded-xl">
              <span class="block text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">Prix normal</span>
              <span class="block text-2xl font-bold line-through text-gray-400">40 000 FCFA</span>
            </div>
            <div class="text-center p-6 bg-gradient-to-r from-accent to-yellow-300 rounded-xl">
              <span class="block text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">Prix promo</span>
              <span class="block text-4xl font-black text-gray-900 mb-2">8 999 FCFA</span>
              <span class="block text-sm font-semibold text-red-800">Vous économisez 31 000 FCFA</span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl mb-8 border-l-4 border-primary">
            <p class="font-bold text-gray-900 mb-3">Pourquoi ce prix ?</p>
            <p class="text-gray-600 mb-3">
              Cette promo est offerte pour permettre à ceux qui veulent se lancer de le faire à prix réduit. 
              Le prix repassera à 40 000 FCFA dans :
            </p>
            <p class="text-2xl md:text-3xl font-bold text-red-600 text-center">{{ countdown }}</p>
          </div>

          <a href="https://formations-pro.mymaketou.store/products/devenir-pro-en-creation-de-contenu-ia" target="_blank" rel="noopener" class="w-full inline-block text-center bg-blue-700 text-white text-lg md:text-xl font-bold py-4 md:py-5 px-4 md:px-10 rounded-2xl md:rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-[#764ba2]/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 animate-bounce [animation-duration:1.5s]">
                      Oui, je veux accéder à la formation pour 8 999 FCFA
                    </a>
        </div>
      </div>

      <div class="mt-8 rounded-xl p-6">
        <div class="flex justify-between items-center mb-3">
          <span class="text-lg font-bold text-gray-900">Places disponibles</span>
          <span class="text-lg font-bold text-red-600">{{ takenPlaces }}/{{ totalPlaces }}</span>
        </div>
        <div class="w-full bg-gray-300 rounded-full h-4 relative">
          <div 
            class="bg-red-600 h-full transition-all duration-300 rounded-full"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <p class="text-sm text-gray-600 mt-3 text-center">Seulement {{ totalPlaces - takenPlaces }} places restantes !</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUserName } from '../composables/useUserName'

const { userName } = useUserName()

const countdown = ref('')
let intervalId = null

const totalPlaces = ref(135)
const takenPlaces = ref(120)

// Date de départ: 21 février 2026 00:00:00
const startDate = new Date('2026-02-21T00:00:00').getTime()
const initialTakenPlaces = 120
const decrementInterval = 4 * 60 * 60 * 1000 // 4 heures en millisecondes

const calculateTakenPlaces = () => {
  const now = new Date().getTime()
  const elapsed = now - startDate
  const periods = Math.floor(elapsed / decrementInterval)
  
  // Augmenter le nombre de places prises (pas dépasser 135)
  const newTakenPlaces = Math.min(initialTakenPlaces + periods, totalPlaces.value)
  takenPlaces.value = newTakenPlaces
}

const progressPercentage = computed(() => {
  return (takenPlaces.value / totalPlaces.value) * 100
})

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
  
  calculateTakenPlaces()
  // Mettre à jour toutes les minutes pour vérifier
  setInterval(calculateTakenPlaces, 60000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
</style>

