<template>
  <section class="py-20 px-5 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        <span v-if="userName" class="text-blue-900">{{ userName }}</span><span v-if="userName">, i</span><span v-else>I</span>ls ont suivi la formation
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/images/3.png" alt="Témoignage 1" class="w-full h-auto object-contain rounded-xl shadow-lg border-4 border-accent" />
        <img src="/images/18.png" alt="Témoignage 2" class="w-full h-auto object-contain rounded-xl shadow-lg border-4 border-accent" />
        <img src="/images/17.png" alt="Témoignage 3" class="w-full h-auto object-contain rounded-xl shadow-lg border-4 border-accent" />
        <img src="/images/15.png" alt="Témoignage 4" class="w-full h-auto object-contain rounded-xl shadow-lg border-4 border-accent" />
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
