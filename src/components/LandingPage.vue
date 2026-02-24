<template>
  <div class="w-full">
    <NameModal />
    <CountdownBar />
    <HeroSection />
    <ProblemsSection />
    <div class="w-full my-0">
      <img src="/images/21.png" alt="Illustration formation IA" class="w-full h-auto object-cover shadow-xl hidden sm:block" />
      <img src="/images/22.png" alt="Illustration formation IA mobile" class="w-full h-auto object-cover shadow-xl sm:hidden" />
    </div>
    <TransformationSection />
    <ContentSection />
    <TargetAudienceSection />
    <CredibilitySection />
    <TestimonialSection />
    <OfferSection />
    <ReassuranceSection />
    <FinalCTASection />
  </div>
</template>

<script setup>
import NameModal from './NameModal.vue'
import CountdownBar from './CountdownBar.vue'
import HeroSection from './HeroSection.vue'
import ProblemsSection from './ProblemsSection.vue'
import TransformationSection from './TransformationSection.vue'
import ContentSection from './ContentSection.vue'
import TargetAudienceSection from './TargetAudienceSection.vue'
import CredibilitySection from './CredibilitySection.vue'
import TestimonialSection from './TestimonialSection.vue'
import OfferSection from './OfferSection.vue'
import ReassuranceSection from './ReassuranceSection.vue'
import FinalCTASection from './FinalCTASection.vue'
</script>

<style scoped>
</style>
