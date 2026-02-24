<template>
  <section class="py-20 px-5 bg-gradient-to-br from-[#0c1844] to-blue-800 relative overflow-hidden">
    <!-- Grille de fond -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 100px 100px;"></div>
    </div>
    
    <div class="max-w-5xl mx-auto relative z-10">
      <h2 class="text-5xl font-bold text-center mb-12 text-white">
        <span v-if="userName" class="text-blue-400">{{ userName }}</span><span v-if="userName">, c</span><span v-else>C</span>ette formation est-elle pour vous ?
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-10 rounded-2xl border-4 border-green-500 bg-green-50">
          <h3 class="text-2xl font-bold mb-6 text-gray-900">
            <span class="inline-block w-8 h-8 bg-green-500 rounded-full mr-2 align-middle">
              <svg class="w-5 h-5 text-white inline mt-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            Cette formation est pour vous si :
          </h3>
          <ul class="space-y-4">
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl before:text-green-500 before:font-bold">Vous êtes entrepreneur, freelance ou créateur de contenu</li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl before:text-green-500 before:font-bold">Vous visez les 1M de revenus d'ici <span class="font-bold underline">décembre {{ currentYear }}</span></li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl before:text-green-500 before:font-bold">Vous voulez être visible sur les réseaux sans y passer des heures</li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl before:text-green-500 before:font-bold">Vous souhaitez maitriser les Business 3.0 (agents et outils IA)</li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl before:text-green-500 before:font-bold">Vous voulez un système simple et reproductible</li>
          </ul>
        </div>

        <div class="p-10 rounded-2xl border-4 border-red-500 bg-red-50">
          <h3 class="text-2xl font-bold mb-6 text-gray-900">
            <span class="inline-block w-8 h-8 bg-red-500 rounded-full mr-2 align-middle">
              <svg class="w-5 h-5 text-white inline mt-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </span>
            Cette formation n'est PAS pour vous si :
          </h3>
          <ul class="space-y-4">
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✗'] before:absolute before:left-0 before:text-2xl before:text-red-500 before:font-bold">Vous cherchez une solution magique sans effort</li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✗'] before:absolute before:left-0 before:text-2xl before:text-red-500 before:font-bold">Vous ne voulez pas faire un minimum d'effort pour apprendre</li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✗'] before:absolute before:left-0 before:text-2xl before:text-red-500 before:font-bold">Vous êtes déjà à l'aise financièrement et sans ambition</li>
            <li class="text-gray-700 leading-relaxed pl-8 relative before:content-['✗'] before:absolute before:left-0 before:text-2xl before:text-red-500 before:font-bold">Vous êtes un expert en IA et création de contenu</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useUserName } from '../composables/useUserName'

const { userName } = useUserName()
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
</style>
