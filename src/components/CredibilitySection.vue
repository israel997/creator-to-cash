<template>
  <section class="py-20 px-5 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        Pourquoi me faire confiance <span v-if="userName" class="text-blue-900">{{ userName }}</span> ?
      </h2>
      
      <div class="flex flex-col gap-10">
        <div class="text-center p-8 bg-white rounded-2xl shadow-md">
          <img src="/images/19.png" alt="Profil" class="w-28 h-28 mx-auto mb-4 rounded-full object-cover">
          <h3 class="text-3xl font-bold text-gray-900">Consultant en croissance business & Tech Lead</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex gap-4 p-6 bg-white rounded-xl shadow-md">
            <div class="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900 mb-2">Actif depuis 8 ans</strong>
              <p class="text-gray-600">Je crée du contenu et je gagne l'argent depuis 2017 notamment via la rédaction web et mes accompagnements professionnels</p>
            </div>
          </div>

          <div class="flex gap-4 p-6 bg-white rounded-xl shadow-md">
            <div class="w-12 h-12 flex-shrink-0 bg-yellow-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900 mb-2">+100 Personnes formées</strong>
              <p class="text-gray-600">Entre janvier et février 2026 sur la création de contenu et l'IA via 3 masterclass</p>
            </div>
          </div>

          <div class="flex gap-4 p-6 bg-white rounded-xl shadow-md">
            <div class="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900 mb-2">+13.000.000 FCFA</strong>
              <p class="text-gray-600">En revenus personnels générés sur les 2 dernières années.</p>
            </div>
          </div>

          <div class="flex gap-4 p-6 bg-white rounded-xl shadow-md">
            <div class="w-12 h-12 flex-shrink-0 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <strong class="block text-lg font-bold text-gray-900 mb-2">100% de mes apprenants</strong>
              <p class="text-gray-600">Apprécient le contenu de mes formations et obtiennent des résultats en 2 semaines</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-primary to-secondary p-10 rounded-2xl text-center">
          <p class="text-lg leading-relaxed text-white font-medium">
            Ma mission : vous montrer comment l'IA peut devenir votre meilleur allié pour créer du contenu de qualité, 
            régulièrement, sans vous épuiser. Pas de promesses irréalistes, juste des techniques éprouvées.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUserName } from '../composables/useUserName'
const { userName } = useUserName()
</script>

<style scoped>
</style>

