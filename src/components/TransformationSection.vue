<template>
  <section class="py-20 px-5 bg-gray-200">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        Après cette formation, vous saurez :
      </h2>
      
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserName } from '../composables/useUserName'

const { userName } = useUserName()
</script>

<style scoped>
</style>
