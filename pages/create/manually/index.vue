<template>
  <div class="flex min-h-[80vh] gap-x-16">
    <div class="w-[50%]">
      <h1 class="text-h1 font-league">Creation</h1>
      <h2 class="text-h3 font-league">Uniqueness and competitive advantages</h2>
      <p class="text-subtext">Describe how your project stands out from the competition
        Describe how your project stands out from the competition Describe how
        Describe how your project stands out from the competition
      </p>
      <!-- <div class="mt-8 flex justify-end">
        <p>Completed: 16/20</p>
      </div> -->
      <div class="relative mt-8">
        <AppTextarea class="mt-2" v-model="textModel"></AppTextarea>
        <div class="absolute bottom-0 flex w-full justify-end">
          <AppButton class="">Next step</AppButton>
        </div>
      </div>
    </div>


    <div class="my-8 w-[45%] flex flex-col justify-end">
      <img src="/uniqueness.png" />

    </div>
  </div>
</template>

<script lang="ts" setup>
let textModel = useState("Hello world")
</script>

<style></style>