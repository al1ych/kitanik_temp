<template>
  <img v-if="from === 'ai'" src="@/assets/icons/IconAI.svg" alt="Logo" class="w-[56px] h-[56px]" />
  <div class="min-h-[55px] h-fit text-wrap break-words bg-[#EFEEEC] rounded-[30px] flex items-center px-[32px] py-[15px] text-black text-[16px] response">
    <p class="text-wrap">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  text: string,
  from: 'user' | 'ai'
}>()

</script>

<style>
  .response{
    overflow-wrap: anywhere;
  }
</style>