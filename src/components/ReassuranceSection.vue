<template>
  <section class="py-20 px-5 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        <span v-if="userName" class="text-blue-900">{{ userName }}</span><span v-if="userName">, v</span><span v-else>V</span>os garanties
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="bg-white p-9 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-300">
          <div class="w-16 h-16 mx-auto mb-5 bg-yellow-600 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Accès immédiat</h3>
          <p class="text-gray-600">Dès votre paiement validé, vous recevez vos accès par email. Commencez dans les 2 minutes.</p>
        </div>

        <div class="bg-white p-9 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-300">
          <div class="w-16 h-16 mx-auto mb-5 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Paiement 100% sécurisé</h3>
          <p class="text-gray-600">Vos données sont protégées. Transactions cryptées et conformes aux normes internationales.</p>
        </div>

        <div class="bg-white p-9 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-300">
          <div class="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Accès à vie</h3>
          <p class="text-gray-600">Payez une fois, accédez pour toujours. Mises à jour incluses sans frais supplémentaires.</p>
        </div>

        <div class="bg-white p-9 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-300">
          <div class="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">Satisfait ou remboursé 14 jours</h3>
          <p class="text-gray-600">Testez la formation sans risque. Si elle ne vous convient pas, remboursement intégral sur simple demande.</p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-8 p-8 bg-white rounded-xl border-2 border-green-500">
        <div class="flex items-center gap-3 font-semibold text-gray-900">
          <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span>Formation 100% en ligne</span>
        </div>
        <div class="flex items-center gap-3 font-semibold text-gray-900">
          <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span>Apprentissage progressif</span>
        </div>
        <div class="flex items-center gap-3 font-semibold text-gray-900">
          <span class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
          <span>Accompagnement inclus</span>
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


<script setup>
</script>

<style scoped>
.reassurance {
  padding: 80px 20px;
  background: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 50px;
  color: #1f2937;
}

.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.guarantee-card {
  background: white;
  padding: 36px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.guarantee-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.guarantee-icon {
  font-size: 56px;
  margin-bottom: 20px;
}

.guarantee-card h3 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px;
  color: #1f2937;
}

.guarantee-card p {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  color: #6b7280;
}

.trust-signals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  background: white;
  border-radius: 12px;
  border: 2px solid #10b981;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.trust-check {
  font-size: 24px;
  color: #10b981;
}

@media (max-width: 768px) {
  .reassurance {
    padding: 60px 16px;
  }

  .section-title {
    font-size: 28px;
  }

  .guarantees-grid {
    grid-template-columns: 1fr;
  }

  .trust-signals {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
