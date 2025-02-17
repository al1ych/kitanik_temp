<template>
  <!-- Вся страница -->
  <div class="w-full flex h-screen bg-[#191C1C] text-white">
    <!-- Левая боковая панель -->
    <aside class="min-w-[260px] p-4 border-r border-gray-700 flex flex-col justify-between">
      <div>
        <h2 class="text-xl mb-4">AI Chat</h2>
        <nav class="space-y-2 flex flex-col">
          <NuxtLink to="/long-queue" class="hover:text-gray-300">AI чат</NuxtLink>
          <NuxtLink to="/archive" class="hover:text-gray-300">Архив</NuxtLink>
          <NuxtLink to="/long-queue" class="hover:text-gray-300">Аукцион</NuxtLink>
          <NuxtLink to="/long-queue" class="hover:text-gray-300">Найти инвестора</NuxtLink>
        </nav>
      </div>
      <div class="text-sm mt-8 space-y-1 opacity-60">
        <p>© 2025 KITANIK</p>
        <p>Все права защищены</p>
        <p>Telegram APP</p>
      </div>
    </aside>

    <!-- Основная область -->
    <div class="flex-1 flex flex-col justify-between">
      <!-- Шапка -->
      <header class="p-4 border-b border-gray-700 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold hover:text-gray-300">
          KITANIK
        </NuxtLink>
        <!-- Иконка пользователя / настройки -->
        <NuxtLink to="/profile" class="hover:text-gray-300">
          Профиль
        </NuxtLink>
      </header>

      <!-- Контент: "Что умеет AI?" и т.д. -->
      <main class="flex-1 p-4 flex flex-col justify-end items-end gap-4">
        <div v-for="msg in history" class="flex w-full" :class="{ 'justify-end': msg.from === 'user' }">
          <AiBubble :text="msg.text" :from="msg.from" />
        </div>
      </main>

      <!-- "Чат" / поле ввода внизу страницы -->
      <footer class="p-4 border-t border-gray-700">
        <div class="bg-gray-800  rounded-md flex items-center gap-2">
          <UInput v-model="inputModel" placeholder="Спросить KITANIK-AI..." class="w-full " />
          <UButton @click="handleSend">Отправить</UButton>
        </div>
        <!-- Ссылки внизу -->
        <div class="flex justify-center gap-4 mt-[20px] text-sm text-gray-400">
          <NuxtLink to="/privacy" class="hover:text-gray-200">
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink to="/terms" class="hover:text-gray-200">
            Условия обслуживания
          </NuxtLink>
          <NuxtLink to="/settings" class="hover:text-gray-200">
            Настройки UI
          </NuxtLink>
          <NuxtLink to="/support" class="hover:text-gray-200">
            Поддержка
          </NuxtLink>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'ai-chat'
})

type Message = {
  text: string,
  from: 'user' | 'ai'
}

const history = ref<Message[]>([
  { text: 'Привет! Чем могу помочь?', from: 'ai' },
  { text: 'Привет! Как мне оформить мою идею?', from: 'user' },
])

const inputModel = ref('')

async function handleSend() {
  history.value.push({ text: inputModel.value, from: 'user' })
  history.value.push({ text: 'К сожалению, я не могу помочь в этом вопросе', from: 'ai' })
}

</script>

<style scoped>
/* Дополнительные стили (если нужно) */
</style>
