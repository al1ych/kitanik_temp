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
            <div v-for="msg in history" class="flex flex-1 w-full h-fit gap-[20px]" :class="{ 'justify-end': msg.from === 'user' }" @click="msg.isDownload ? handleDownload(msg.fileName!) : null">
              <AiBubble :text="msg.text" :from="msg.from"/>
            </div>
            <div v-if="isLoading" class="w-full h-fit flex-1 flex gap-[20px] justify-start items-center">
              <img src="@/assets/icons/IconAI.svg" alt="Logo" class="w-[56px] h-[56px]" />
              <img src="@/assets/icons/BotAnswer.svg" alt="" class="w-[39px] h-[39px] spinning">
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
import iconDownload from '@/assets/icons/IconDownload.svg';
definePageMeta({
  layout: 'ai-chat'
})

type Message = {
  text: string,
  from: 'user' | 'ai',
  isDownload?: boolean,
  fileName?: string
}

const history = ref<Message[]>([
  { text: 'Привет! Пожалуйста, опишите вкратце вашу идею.', from: 'ai' },
]);

const inputModel = ref('');
const aiResponses = [
  'Отлично звучит! Кто будет целевой аудиторией для SleepWise? Рассматриваете ли вы определённые возрастные группы, профессии или, возможно, людей с конкретными проблемами со сном?',
  'Понятно. SleepWise ориентирован на довольно широкую аудиторию, каждая из которых имеет свои специфические потребности. А какую основную проблему или проблемы каждая из этих групп может решать с помощью SleepWise? Почему они могут выбрать именно ваше решение?',
  'Спасибо за столь подробное описание! Теперь становится ясно, что SleepWise предлагает уникальные и персонализированные решения для разных групп пользователей. А какие потенциальные препятствия или вызовы вы видите на пути к реализации и популяризации вашего проекта? Может быть, есть сложности с технологией, интеграцией носимых устройств, привлечением пользователей или что-то другое?',
  'Понятно, это действительно важные аспекты. Как вы планируете справляться с этими вызовами? Например, какие шаги или стратегии вы намерены применить для повышения точности данных, обеспечения конфиденциальности или привлечения пользователей?',
  'Приступаю к созданию. Ожидайте, процесс занимает в среднем 1-2 минуты.'
];

let currentAiResponseIndex = 0;
const isLoading = ref(false);

async function handleSend() {
  if (inputModel.value.trim() === '') return;

  const userInput = inputModel.value;
  history.value.push({ text: userInput, from: 'user' });

  isLoading.value = true;

  setTimeout(() => {
    const aiResponse = aiResponses[currentAiResponseIndex];

    history.value.push({ text: aiResponse, from: 'ai' });

    currentAiResponseIndex = (currentAiResponseIndex + 1) % aiResponses.length;

    if (currentAiResponseIndex === 0) {
      const additionalResponse: Message = {
        text: '📁 Скачать отчет',
        from: 'ai',
        isDownload: true,
        fileName: 'BotIdea.pdf'
      };
      history.value.push(additionalResponse);
    }

    isLoading.value = false;

  }, 3000);

  inputModel.value = '';
}

function handleDownload(fileName: string) {
  const link = document.createElement('a');
  link.href = `/${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

  .spinning {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
