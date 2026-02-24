<template>
  <section class="py-20 px-5 bg-gray-200">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        <span v-if="userName" class="text-blue-900">{{ userName }}</span><span v-if="userName">, </span>Vous rencontrez ces difficultés ?
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div class="w-16 h-16 mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Besoin de monétiser votre contenu</h3>
          <p class="text-gray-600 leading-relaxed">Vous créez du contenu de qualité régulièrement, mais vous ne savez pas comment le transformer en revenus concrets et récurrents.</p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div class="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Besoin de revenus supplémentaires</h3>
          <p class="text-gray-600 leading-relaxed">Vous cherchez une opportunité pour générer au moins <span class="font-bold text-gray-900">100 à 300.000 F chaque mois</span> grâce à votre présence en ligne, mais vous ne savez pas par où commencer.</p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div class="w-16 h-16 mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Votre business n'a pas une bonne visibilité</h3>
          <p class="text-gray-600 leading-relaxed">Vous avez un service ou un produit à proposer, mais votre contenu ne touche pas assez de personnes et votre audience reste limitée.</p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div class="w-16 h-16 mb-4 bg-orange-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Du mal à attirer des clients</h3>
          <p class="text-gray-600 leading-relaxed">Vous publiez du contenu régulièrement, mais vous n'arrivez pas à convertir votre audience en clients qui achètent vos services ou produits.</p>
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
