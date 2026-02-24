<template>
  <div class="w-full">
    <NameModal />
    <CountdownBar />
    <HeroSection />
    <ProblemsSection />
    <div class="w-full my-0 overflow-hidden">
      <img src="/images/21.png" alt="Illustration formation IA" class="w-full h-auto object-cover shadow-xl hidden sm:block transform scale-110" />
      <img src="/images/21.png" alt="Illustration formation IA mobile" class="w-full h-auto object-cover shadow-xl sm:hidden transform scale-150" />
    </div>
    <TransformationSection />
    <ResultsSection />
    <ContentSection />
    <TargetAudienceSection />
    <CredibilitySection />
    <TestimonialSection />
    <OfferSection />
    <ReassuranceSection />
    <FinalCTASection />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import NameModal from './NameModal.vue'
import CountdownBar from './CountdownBar.vue'
import HeroSection from './HeroSection.vue'
import ProblemsSection from './ProblemsSection.vue'
import ResultsSection from './ResultsSection.vue'
import TransformationSection from './TransformationSection.vue'
import ContentSection from './ContentSection.vue'
import TargetAudienceSection from './TargetAudienceSection.vue'
import CredibilitySection from './CredibilitySection.vue'
import TestimonialSection from './TestimonialSection.vue'
import OfferSection from './OfferSection.vue'
import ReassuranceSection from './ReassuranceSection.vue'
import FinalCTASection from './FinalCTASection.vue'
import WhatsAppButton from './WhatsAppButton.vue'
</script>

<style scoped>
</style>
