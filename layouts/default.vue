<template>
    <div class="layout-container text-black min-h-screen">
        <!-- Обёртка, чтобы центрировать шапку по горизонтали -->
        <div class="w-full flex justify-center">
            <header class="header p-4 bg-[#202323] opacity-80 mt-[28px] backdrop-blur-[20px] 
                 w-[93%] h-[82.5px] rounded-[75px] flex items-center justify-between">
                <!-- Левая часть: Круг с "RU" -->
                <div
                    class="flex items-center justify-center w-[50px] h-[50px] bg-black rounded-full text-white text-sm">
                    RU
                </div>

                <!-- Центральная часть: Логотип/текст KITANIK -->
                <NuxtLink to="/" class="flex gap-[10px] items-center text-2xl font-300 text-white">
                    <img src="@/assets/icons/Logo.svg" alt="Logo" class="w-[32px] h-[22px]" />
                    <span>KITANIK</span>
                </NuxtLink>

                <!-- Правая часть: Текст "BeIn" и стрелка в круге -->
                <div class="flex items-center space-x-2">
                    <span class="text-white">Выйти</span>
                    <div class="w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center text-white">
                        →
                    </div>
                </div>
            </header>
        </div>

        <!-- Основной контент -->
        <main class="container mx-auto px-0 py-8">
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