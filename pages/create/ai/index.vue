<template>
  <!-- Вся страница -->
  <div class="w-full flex justify-between h-screen bg-[#191C1C] text-white px-[42px] py-[33px] overflow-hidden">
    <!-- Левая боковая панель -->
    <aside class="min-w-[260px] p-[20px] h-full flex flex-col justify-between rounded-[30px] bg-white-5 aside">
      <div class="w-full flex justify-between items-center">
        <img src="@/assets/icons/GraphicElement.svg" alt="Logo" class="w-[25px] h-[27px]" />
        <button>
          <img src="@/assets/icons/IconAddChat.svg" alt="Logo" class="w-[22px] h-[22px]" />
        </button>
      </div>
      <div class="text-sm space-y-1 flex flex-col gap-[40px]">
        <nav class="flex flex-col">
          <NuxtLink to="/long-queue" class="hover:text-gray-300 w-full pt-[7px] pb-[6px]">AI чат</NuxtLink>
          <NuxtLink to="/archive" class="hover:text-gray-300 w-full pt-[7px] pb-[6px]">Архив</NuxtLink>
          <NuxtLink to="/long-queue" class="hover:text-gray-300 w-full pt-[7px] pb-[6px]">Аукцион идей</NuxtLink>
          <NuxtLink to="/long-queue" class="hover:text-gray-300 w-full pt-[7px] pb-[6px]">Найти инвестора</NuxtLink>
        </nav>
        <div class="flex flex-col gap-[20px]">
          <div class="text-[#B6F38C]">
            <p>© 2025 KITANIK<br>Все права защищены</p>
          </div>
          <div class="flex flex-col gap-[15px]">
            <div class="w-[32px] h-[32px] rounded-[16px] bg-[#D9D9D9]"></div>
            <p>Telegram APP</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Основная область -->
    <div class="w-fit flex-1 flex flex-col justify-between items-center">
      <!-- Шапка -->
      <header class="flex items-center w-fit">
        <NuxtLink to="/" class="flex gap-[10px] items-center text-2xl font-300 hover:text-gray-300">
          <img src="@/assets/icons/Logo.svg" alt="Logo" class="w-[32px] h-[22px]" />
          <span>KITANIK</span>
        </NuxtLink>
      </header>

      <div class="flex flex-col justify-between max-h-full h-full">
        <!-- Контент: "Что умеет AI?" и т.д. -->
        <main class="flex flex-1 w-[885px] overflow-y-auto">
          <div class="w-full h-fit flex-1 flex flex-col justify-start items-end gap-[50px]">
            <div v-for="msg in history" class="flex flex-1 w-full h-fit gap-[20px]" :class="{ 'justify-end': msg.from === 'user' }">
              <AiBubble :text="msg.text" :from="msg.from"/>
            </div>
          </div>
        </main>
        <!-- "Чат" / поле ввода внизу страницы -->
        <footer class="w-fit flex gap-[20px]">
          <div class="w-fit flex flex-col gap-[20px]">
            <div class="w-[885px] rounded-md flex items-center gap-2">
              <div class="w-full flex justify-end items-end h-[107px] pl-[6px] pt-[6px] pr-[18px] pb-[12px] bg-[#EFEEEC] rounded-[26px] ">
                <textarea v-model="inputModel" placeholder="Спросить KITANIK-AI..." class="w-full h-full px-[12px] bg-[#EFEEEC] rounded-[26px] pt-[5px] pb-[6px] text-black border-0 outline-none" />
                <button @click="handleSend" class="w-[34px] h-[34px] rounded-[17px] bg-white">
                  <img src="@/assets/icons/IconSend.svg" alt="IconSend" class="w-full h-full" />
                </button>
              </div>
            </div>
            <!-- Ссылки внизу -->
            <div class="w-full flex justify-between gap-4 text-sm text-gray-400">
              <NuxtLink to="/privacy" class="hover:text-gray-200 underline">
                Политика конфиденциальности
              </NuxtLink>
              <NuxtLink to="/terms" class="hover:text-gray-200 underline">
                Условия обслуживания
              </NuxtLink>
              <NuxtLink to="/settings" class="hover:text-gray-200 underline">
                Настройки куки
              </NuxtLink>
              <NuxtLink to="/support" class="hover:text-gray-200 underline">
                Поддержка
              </NuxtLink>
            </div>
          </div>
          <img src="@/assets/icons/IconAI.svg" alt="Logo" class="w-[56px] h-[56px]" />
        </footer>
      </div>
    </div>

        <!-- Иконка пользователя / настройки -->
    <div class="flex flex-col gap-[20px]">
      <NuxtLink to="/profile" class="hover:text-gray-300 h-fit">
        <img src="@/assets/icons/IconProfile.svg" alt="Logo" class="w-[36px] h-[36px]" />
      </NuxtLink>
      <button class="w-[36px] h-[36px] flex justify-center items-center hover:text-gray text-small_button change_language">
        RU
      </button>
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
  .aside {
    position: relative;
    z-index: 1;
  }

  .aside::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(194deg, #5BB9F4, #9EA1A8);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  .change_language{
    position: relative;
    z-index: 1;
  }
  
  .change_language::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    padding: 2px;
    background: #B6F38C;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
</style>
