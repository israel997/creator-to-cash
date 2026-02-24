<template>
  <section class="py-20 px-5 bg-gradient-to-br from-[#0c1844] to-blue-800 relative overflow-hidden">
    <!-- Grille de fond -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 100px 100px;"></div>
    </div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12 text-white">
        Ils ont aussi suivi la formation
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
