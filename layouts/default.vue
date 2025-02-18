<template>
    <div class="layout-container">
        <!-- Шапка -->
        <div class="header-wrapper">
            <header class="header">
                <div class="logo-circle">
                    RU
                </div>
                <NuxtLink to="/" class="flex gap-[10px] items-center text-2xl font-300 text-white">
                    <img src="@/assets/icons/Logo.svg" alt="Logo" class="w-[32px] h-[22px]" />
                    <span>KITANIK</span>
                </NuxtLink>
                <div class="profile-wrapper">
                    <span class="exit-text">Выйти</span>
                    <div class="profile-icon">
                        →
                    </div>
                </div>
            </header>
        </div>
        <!-- Основной контент -->
        <main class="main-container">
            <NuxtPage />
        </main>
    </div>
</template>

<script setup>
// Дополнительный код, если требуется
</script>

<style scoped>
:global(body) {
    background-color: #191C1C
}

.layout-container {
    font-family: 'Mulish', sans-serif;
    position: relative;
    min-height: 100vh;
    overflow-y: auto;
}

/* Фон через псевдоэлемент - фиксирован относительно окна, только один раз */
.layout-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1440/1024;
    /* height: 300px; */
    /* задайте нужную высоту фона */
    background-color: #191C1C;
    background-image: url('/images/bg.svg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% auto;
    z-index: -1;
    pointer-events: none;
}

/* Шапка (header) */
.header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.header {
    font-family: 'Wix Madefor Display', sans-serif;
    padding: 1rem;
    background-color: #202323;
    opacity: 0.8;
    margin-top: 28px;
    backdrop-filter: blur(20px);
    width: 93%;
    height: 82.5px;
    border-radius: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

/* Элементы шапки */
.logo-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    font-size: 0.875rem;
    color: white;
}

.logo {
    font-size: 2rem;
    font-weight: 400;
    color: white;
    text-decoration: none;
}

.profile-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.profile-icon {
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.exit-text {
    color: white;
}

/* Основной контент */
.main-container {
    padding: 2rem 0;
    /* Если нужно, добавьте отступ сверху, чтобы контент не залезал под шапку */
    margin-top: 20px;
}
</style>