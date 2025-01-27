<template>

  <h1 class="font-league text-h1">Create</h1>

  <SectionWelcome class="min-h-[80vh]">

    <div class="w-full mx-auto flex justify-center">

      <div class="flex flex-col items-center gap-y-2">
        <p class="text-subtext">Сhoose a way to create an idea</p>

        <div class="flex gap-x-4">
          <AppButton @click="handleManually()">Create manually</AppButton>
          <AppButton>Create with AI</AppButton>
        </div>
      </div>

    </div>
  </SectionWelcome>

</template>

<script lang="ts" setup>
async function handleManually() {
  navigateTo('/create/manually',)
}
</script>

<style></style>