<template>
  <!-- Внешний контейнер с анимированным градиентом -->
  <div class="outer-container">
    <!-- Внутренний контейнер с «фоном кнопки» -->
    <div class="inner-container">
      <p class="flex justify-center w-full text-[15px]">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* ----------------------------------------
   1. Объявляем Custom Properties для radial-gradient
----------------------------------------- */
@property --pos-x {
  syntax: '<percentage>';
  initial-value: 11.14%;
  inherits: false;
}

@property --pos-y {
  syntax: '<percentage>';
  initial-value: 140%;
  inherits: false;
}

@property --spread-x {
  syntax: '<percentage>';
  initial-value: 150%;
  inherits: false;
}

@property --spread-y {
  syntax: '<percentage>';
  initial-value: 180.06%;
  inherits: false;
}

/* Свойство для анимации смещения */
@property --anim-offset {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

/* Цвета градиента (ваши) */
@property --color-1 {
  syntax: '<color>';
  initial-value: #b6f38c;
  inherits: false;
}

@property --color-2 {
  syntax: '<color>';
  initial-value: #5b9472;
  inherits: false;
}

@property --color-3 {
  syntax: '<color>';
  initial-value: #003658;
  inherits: false;
}

@property --color-4 {
  syntax: '<color>';
  /* Прозрачность 50% для #5BB9F4 */
  initial-value: rgba(91, 185, 244, 0.5);
  inherits: false;
}

/* Точки остановки (4 штуки) */
@property --stop-1 {
  syntax: '<percentage>';
  initial-value: 16%;
  inherits: false;
}

@property --stop-2 {
  syntax: '<percentage>';
  initial-value: 34%;
  inherits: false;
}

@property --stop-3 {
  syntax: '<percentage>';
  initial-value: 84%;
  inherits: false;
}

@property --stop-4 {
  syntax: '<percentage>';
  initial-value: 98%;
  inherits: false;
}

/* ----------------------------------------
   2. Внешний контейнер (outer-container):
      сохраняем исходную форму (бордеры, скругления и т.д.)
      и задаем фон с radial-gradient
----------------------------------------- */
.outer-container {
  /* Исходная форма кнопки (без изменений) */
  @apply inline-block p-[2px] rounded-full cursor-pointer;

  background: radial-gradient(var(--spread-x) var(--spread-y) at calc(var(--pos-x) + var(--anim-offset)) var(--pos-y),
      var(--color-1) var(--stop-1),
      var(--color-2) var(--stop-2),
      var(--color-3) var(--stop-3),
      var(--color-4) var(--stop-4));

  background-size: 200% auto;

  transition:
    --pos-x 0.5s,
    --pos-y 0.5s,
    --spread-x 0.5s,
    --spread-y 0.5s,
    --color-1 0.5s,
    --color-2 0.5s,
    --color-3 0.5s,
    --color-4 0.5s,
    --stop-1 0.5s,
    --stop-2 0.5s,
    --stop-3 0.5s,
    --stop-4 0.5s;
}

/* ----------------------------------------
   3. Hover-состояние: при наведении запускается однократная анимация,
      конечное состояние сохраняется
----------------------------------------- */
.outer-container:hover {
  --pos-x: 0%;
  --pos-y: 91.51%;
  --spread-x: 120.24%;
  --spread-y: 103.18%;

  --color-1: #b6f38c;
  --color-2: #5b9472;
  --color-3: #003658;
  --color-4: rgba(91, 185, 244, 0.5);

  --stop-1: 16%;
  --stop-2: 34%;
  --stop-3: 84%;
  --stop-4: 98%;

  /* Запускаем анимацию один раз с короткой длительностью (например, 0.3s) */
  animation: gradientShift 0.3s linear forwards;
}

/* Ключевые кадры для анимации смещения градиента */
@keyframes gradientShift {
  from {
    --anim-offset: 0%;
  }

  to {
    --anim-offset: -50%;
  }
}

/* ----------------------------------------
   4. Внутренний контейнер (inner-container):
      сохраняем изначальную форму кнопки
----------------------------------------- */
.inner-container {
  @apply bg-[#191C1C] text-white rounded-full flex justify-center px-[35px] pt-[16px] pb-[15px] transition-all;
}

/* При hover делаем фон внутреннего контейнера прозрачным */
.outer-container:hover .inner-container {
  @apply bg-transparent;
}
</style>
