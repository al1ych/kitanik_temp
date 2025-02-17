<template>

  <div class="h-[55px] bg-white rounded-[30px] flex items-center px-[32px] text-black text-[16px]">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  text: string,
  from: 'user' | 'ai'
}>()

</script>

<style></style>