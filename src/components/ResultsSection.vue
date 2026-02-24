<template>
  <section class="py-16 px-5 bg-white">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
        <span v-if="userName" class="text-blue-500">{{ userName }}</span><span v-if="userName">, o</span><span v-else>O</span>n vise 1M de revenu d'ici <span class="font-bold underline">décembre {{ currentYear }}</span>
      </h1>
    
      
      <h2 class="text-xl md:text-3xl font-bold text-center mb-10 text-gray-700">
        Mes résultats sur les 5 dernières semaines
      </h2>

      <div class="w-full my-0 relative">
        <!-- Version desktop -->
        <div class="hidden sm:block relative">
          <img src="/images/23.png" alt="Illustration formation IA" class="w-full h-auto object-cover shadow-xl" />
          <!-- Cadre rouge autour de la section statistiques -->
          <div class="absolute border-4 border-red-500 rounded-lg pointer-events-none" style="top: 2%; left: 5%; width: 90%; height: 22%;"></div>
        </div>
        
        <!-- Version mobile -->
        <div class="sm:hidden relative">
          <img src="/images/22.png" alt="Illustration formation IA mobile" class="w-full h-auto object-cover shadow-xl" />
          <!-- Cadre rouge autour de la section statistiques mobile -->
          <div class="absolute border-4 border-red-500 rounded-lg pointer-events-none" style="top: 0%; left: 1%; width: 98%; height: 50%;"></div>
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
