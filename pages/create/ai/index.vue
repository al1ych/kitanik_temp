<template>
  <div class="flex min-h-[80vh] gap-x-16">
    <div class="w-[50%]">
      <h1 class="text-h1 font-league inline-block">Creation</h1>
      <h3 class="ml-4 text-kitanik-purple-400 text-h3 font-league inline-block">AI</h3>
      <h2 class="text-h3 font-league">Uniqueness and competitive advantages</h2>
      <AiChat class="w-full h-64"></AiChat>
      <!-- <div class="mt-8 flex justify-end">
        <p>Completed: 16/20</p>
      </div> -->
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