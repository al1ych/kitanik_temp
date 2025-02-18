<template>
  <div class="flex flex-col items-center justify-center w-full p-8 min-h-[70vh]">
    <h2 class="font-mulish text-subhead font-[400] text-white text-[34px]">
      Что вы получите с нами
    </h2>

    <div class="mt-[94px] flex space-x-[23px]">
      <div class="w-[488px] h-[275px] border-[3px] border-white rounded-[20px] flex items-center justify-center">
        <p class="text-[30px] text-white">Превратить идеи в доход, продавая их и находя инвесторов</p>
      </div>
      <div class="w-[488px] h-[275px] border-[3px] border-white rounded-[20px] flex items-center justify-center">
        <p class="text-[30px] text-white">Превратить идеи в доход, продавая их и находя инвесторов</p>
      </div>
    </div>
  </div>
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