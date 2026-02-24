<template>
  <section class="py-16 px-5 bg-white">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
        <span v-if="userName" class="text-blue-500">{{ userName }}</span><span v-if="userName">, o</span><span v-else>O</span>n vise 1M d'ici <span class="font-bold underline">décembre {{ currentYear }}</span>
      </h1>
      
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-700">
        Voici mes résultats sur les 5 dernières semaines
      </h2>

      <div class="w-full my-0">
        <img src="/images/23.png" alt="Illustration formation IA" class="w-full h-auto object-cover shadow-xl hidden sm:block" />
        <img src="/images/22.png" alt="Illustration formation IA mobile" class="w-full h-auto object-cover shadow-xl sm:hidden" />
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
