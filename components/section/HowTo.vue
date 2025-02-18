<template>
  <!-- <div class="flex flex-col items-center justify-center w-full p-8 min-h-[70vh]"> -->
  <img src="/images/Block2.svg" class="pointer-events-none" />
  <!-- <h2 class="font-mulish text-subhead font-[400] text-white text-[34px]">
      Как это работает
    </h2>

    <div class="grid grid-cols-2 grid-rows-3">

      <p>| </p>

      <div>
        <p class="text-[30px]">Придумайте идею</p>
        <p>subtext</p>
      </div>


      <p>|</p>

      <div>
        <p class="text-[25px]">Проанализируйте и разместите идею</p>
        <p>subtext</p>
      </div>

      <p>|</p>

      <div>
        <p class="text-[25px]">Продайте идею и получите прибыль</p>
        <p>subtext</p>
      </div>
    </div> -->
  <!-- </div> -->
</template>


<script lang="ts" setup>
import { ref } from 'vue'
const showOptions = ref(false)

async function handleCreateIdea() {
  showOptions.value = true
}

async function handleManualIdea() {
  console.log('Manual idea')
}

async function handleAiIdea() {
  console.log('AI idea')
  navigateTo('/create/ai')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>