<template>
  <section class="py-20 px-5 bg-gray-200">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">Après cette formation, vous saurez :</h2>
      
      <div class="flex flex-col gap-6">
        <div class="flex gap-5 items-start p-6 bg-gray-50 rounded-xl border-l-4 border-green-500">
          <div class="w-8 h-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">Transformer votre contenu en opportunité de revenu</h3>
            <p class="text-gray-600 leading-relaxed">Créer des contenus qui attirent des clients.</p>
          </div>
        </div>

        <div class="flex gap-5 items-start p-6 bg-gray-50 rounded-xl border-l-4 border-green-500">
          <div class="w-8 h-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">Rédiger des posts engageants en quelques clics</h3>
            <p class="text-gray-600 leading-relaxed">Sans partir d'une page blanche, avec des structures qui fonctionnent</p>
          </div>
        </div>

        <div class="flex gap-5 items-start p-6 bg-gray-50 rounded-xl border-l-4 border-green-500">
          <div class="w-8 h-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">Gagner jusqu'à 100 000 FCFA par mois</h3>
            <p class="text-gray-600 leading-relaxed">En proposant des services IA au public</p>
          </div>
        </div>

        <div class="flex gap-5 items-start p-6 bg-gray-50 rounded-xl border-l-4 border-green-500">
          <div class="w-8 h-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">Gagner 80% de temps sur votre création de contenu</h3>
            <p class="text-gray-600 leading-relaxed">Pour vous concentrer sur votre cœur de métier et vos clients</p>
          </div>
        </div>

        <div class="flex gap-5 items-start p-6 bg-gray-50 rounded-xl border-l-4 border-green-500">
          <div class="w-8 h-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">Profiter des opportunités de 2026</h3>
            <p class="text-gray-600 leading-relaxed">Avec +10 différentes possibilité de business à explorer</p>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-transparent rounded-xl p-6">
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
import { ref, computed, onMounted } from 'vue'

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

onMounted(() => {
  calculateTakenPlaces()
  // Mettre à jour toutes les minutes pour vérifier
  setInterval(calculateTakenPlaces, 60000)
})
</script>

<style scoped>
</style>
