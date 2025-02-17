<template>
  <div class="layout-container text-black min-h-screen">
    <main class="container mx-auto px-0">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
/* Здесь может быть ваш код, если нужен */
</script>

<style scoped>
.layout-container {
  font-family: 'Mulish', sans-serif;
}

/* Обнуляем html/body, растягиваем на высоту экрана */
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

/* Шрифт для заголовка (при желании) */
.header {
  font-family: 'Wix Madefor Display', sans-serif;
}
</style>