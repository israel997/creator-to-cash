y<template>
  <section class="py-20 px-5 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        <span v-if="userName" class="text-blue-900">{{ userName }}</span><span v-if="userName">, v</span><span v-else>V</span>oici ce que vous allez apprendre
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-gray-300 p-8 rounded-xl shadow-md">
          <div class="inline-block bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Module 1</div>
          <h3 class="text-xl font-bold mb-4 text-gray-900">Les stratégies de contenu qui marchent</h3>
          <ul class="space-y-3">
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Les techniques pour devenir viral en 30 jours</li>
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Comment attirer 10x plus de clients à partir de votre contenu</li>
          </ul>
        </div>

        <div class="bg-gray-300 p-8 rounded-xl shadow-md">
          <div class="inline-block bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Module 2</div>
          <h3 class="text-xl font-bold mb-4 text-gray-900">Les top IA pour images, vidéos marketing et texte</h3>
          <ul class="space-y-3">
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Chat GPT, Claude Anthropic, NotobookLM, Veo 3, Sora</li>
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Comment trouver sa niche et se positionner avec l'IA</li>
          </ul>
        </div>

        <div class="bg-gray-300 p-8 rounded-xl shadow-md">
          <div class="inline-block bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Module 3</div>
          <h3 class="text-xl font-bold mb-4 text-gray-900">Convertir l'IA en source de revenus</h3>
          <ul class="space-y-3">
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Les 05 meilleurs business à lancer avec l'IA</li>
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Comment attirer des clients vers vous</li>
          </ul>
        </div>

        <div class="bg-gray-300 p-8 rounded-xl shadow-md">
          <div class="inline-block bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Module 4</div>
          <h3 class="text-xl font-bold mb-4 text-gray-900">Application sur Chariow eet Maketou</h3>
          <ul class="space-y-3">
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Trouver son positionnement et créer des produits digitaux</li>
            <li class="text-gray-900 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gray-900 before:font-bold">Vendre efficacement et atteindre 1M</li>
          </ul>
        </div>
      </div>

      <div class="bg-gradient-to-r from-accent to-yellow-300 p-10 rounded-2xl text-center text-gray-900">
        <h3 class="text-3xl font-bold mb-5">
          <span class="inline-block w-10 h-10 bg-white rounded-full mr-2 align-middle">
            <svg class="w-6 h-6 text-accent inline mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
            </svg>
          </span>
          Bonus inclus
        </h3>
        <ul class="inline-block text-left space-y-3">
          <li class="text-lg font-semibold pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl">50+ prompts prêts à l'emploi pour LinkedIn, Instagram et Facebook</li>
          <li class="text-lg font-semibold pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl">Templates de posts à personnaliser</li>
          <li class="text-lg font-semibold pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl">30 jours d'accompagnement pour vous positionner</li>
          <li class="text-lg font-semibold pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-2xl">Statut <span class="underline">PRIVILÈGE</span> dans ma communauté</li>
        </ul>
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
