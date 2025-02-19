<template>
  <div class="flex flex-col items-center justify-center w-full p-8 min-h-[70vh]">
    <h2 class="font-mulish text-subhead font-[400] text-white text-[34px]">
      Ценовые планы
    </h2>


    <div class="grid grid-cols-2 grid-rows-2 mt-[94px] gap-[24px]">


      <div class="flex items-center">
        <p class="text-[200px] text-[#5BB9F4]">$3</p>
        <div>
          <p class="text-[48px]">1 идея</p>
          <AppButtonSpecial>
            <p>Купить</p>
          </AppButtonSpecial>
        </div>
      </div>

      <div class="flex items-center">
        <p class="text-[200px] text-[#5BB9F4]">$20</p>
        <div>
          <p class="text-[48px]">10 идей</p>
          <AppButtonSpecial>
            <p>Купить</p>
          </AppButtonSpecial>
        </div>
      </div>


      <div
        class="w-[488px] h-[275px] bg-[#272b2b] rounded-[20px] flex flex-col items-center justify-center text-center px-[50px]">
        <p class="text-[58px] text-white">$30 / месяц</p>
        <p class="text-[24px] text-white">Безлимитное количество генераций идей</p>
      </div>
      <div
        class="w-[488px] h-[275px] bg-[#B6F38CFA]  rounded-[20px] flex flex-col items-center justify-center text-center px-[50px]">
        <p class="text-[58px] text-[#191C1C]">$10 / неделя</p>
        <p class="text-[24px] text-[#191C1C]">Безлимитное количество генераций идей</p>
      </div>


    </div>

    <div class="w-full h-px bg-gradient-to-r from-transparent via-[#efeeec] to-transparent" />

    <div class="flex justify-between items-center w-[1000px] mt-[18px]">
      <div class="flex flex-col space-y-[8px]">
        <p class="text-[34px]">Для бизнеса</p>
        <p class="text-[18px] leading-[35px]">обратитесь к нам<br /> и мы подберем лучшие условия</p>
      </div>

      <div>
        <AppButtonSpecial>
          <p>Обсудить –></p>
        </AppButtonSpecial>
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