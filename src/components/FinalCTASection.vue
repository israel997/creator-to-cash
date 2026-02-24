<template>
  <section class="py-24 px-5 bg-gradient-to-br from-[#0c1844] to-blue-800 text-white text-center relative overflow-hidden">
    <!-- Grille de fond -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 100px 100px;"></div>
    </div>
    
    <div class="max-w-4xl mx-auto relative z-10">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">Prêt à maximiser votre création de contenu ?</h2>
      
      <p class="text-xl leading-relaxed mb-12 opacity-90">
        Rejoignez dès maintenant la formation et construisez une compétence qui peut vous faire gagner 10x plus.</p>

      <div class="bg-white/10 backdrop-blur-lg border-2 border-accent/30 rounded-3xl p-12 mb-10">
        <div class="mb-8">
          <span class="inline-block bg-accent text-gray-900 px-5 py-2 rounded-full font-bold mb-5">OFFRE EXCLUSIVE</span>
          <div class="flex justify-center items-center gap-5 mb-3 flex-wrap">
            <span class="text-2xl line-through opacity-60">75 000 FCFA</span>
            <span class="text-4xl font-black text-accent">30 000 FCFA</span>
          </div>
        </div>

        <a href="https://formations-pro.mymaketou.store/products/devenir-pro-en-creation-de-contenu-ia-7" target="_blank" rel="noopener" class="w-full inline-block text-center bg-accent text-gray-900 text-lg md:text-2xl font-extrabold py-4 md:py-6 px-4 md:px-12 rounded-2xl md:rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-200 mb-8 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent animate-bounce [animation-duration:1.5s]">
          Je démarre maintenant
        </a>

        <button 
          @click="showModal = true"
          class="max-w-sm mx-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full text-base flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Discuter sur WhatsApp
        </button>
      </div>

      <!-- Modal de confirmation WhatsApp -->
      <Teleport to="body">
        <div 
          v-if="showModal"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] px-5"
          @click.self="showModal = false"
        >
          <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                <span v-if="userName" class="text-blue-600">{{ userName }}, </span>vous allez être redirigé sur WhatsApp
              </h3>
              <p class="text-gray-600 text-lg">pour discuter avec <strong>Israël Oriadé</strong></p>
            </div>

            <div class="flex gap-4">
              <button 
                @click="redirectToWhatsApp"
                class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105"
              >
                Oui
              </button>
              <button 
                @click="showModal = false"
                class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105"
              >
                Non
              </button>
            </div>
          </div>
        </div>
      </Teleport>

      <div class="bg-accent/10 border-2 border-accent/30 rounded-xl p-8 mt-10">
        <p class="text-lg leading-relaxed text-white/95 font-bold">
          <span v-if="userName" class="text-accent font-bold">{{ userName }}, </span><strong class="text-accent">vous hésitez encore ?</strong><br>
          Posez-vous la question : 
          combien de temps et d'opportunités perdez-vous chaque semaine 
          à ne pas monétiser votre présence sur internet ?
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useUserName } from '../composables/useUserName'

const { userName } = useUserName()
const showModal = ref(false)

const redirectToWhatsApp = () => {
  window.open('https://kloo.me/whatsapp-israel-oriade', '_blank')
  showModal.value = false
}
</script>

<style scoped>
</style>
