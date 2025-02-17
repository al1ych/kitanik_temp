<template>
    <div class="relative flex flex-col items-center justify-center w-full p-8 h-[70vh]">
        <h1
            class="font-mulish text-h3 font-[600] bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">
            Платформа для идей и людей
        </h1>
        <p class="text-subhead bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent mt-[18px]">
            Монетизируйте свои идеи, находите партнеров и меняйте мир
        </p>
        <transition name="fade" mode="out-in">
            <div v-if="!showOptions" key="single" class="mt-[48px]">
                <AppButtonSpecial @click="handleCreateIdea">
                    Создать идею!
                </AppButtonSpecial>
            </div>
            <div v-else key="double" class="flex space-x-[48px] mt-[48px]">
                <AppButtonSpecial @click="handleManualIdea">
                    У меня есть идея
                </AppButtonSpecial>
                <AppButtonSpecial @click="handleAiIdea">
                    Анализ идеи с AI
                </AppButtonSpecial>
            </div>
        </transition>
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

/* Ваши стили для фона страницы остаются без изменений */
:global(html, body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #191C1C;
}

:global(body) {
    position: relative;
}

:global(body)::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    background-image: url('/images/bg.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    image-rendering: auto;
}
</style>