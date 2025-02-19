<template>
  <div class="flex flex-col items-center justify-center w-full p-8 min-h-[70vh] gap-[80px]">
    <h2 ref="header" class="font-mulish text-subhead font-[400] text-white text-[34px]">
      Как это работает
    </h2>

    <div class="grid grid-cols-2 grid-rows-3 max-w-[900px] pb-[118px] gap-[50px]">
      <div class="w-[200px] justify-self-end">
        <div class="h-full animated-gradient relative r-0"></div>
      </div>

      <div>
        <p ref="idea1" class="idea-text text-[25px]">Придумайте идею</p>
      </div>
      
      <div class="w-[200px] justify-self-end">
        <div class="h-full animated-gradient relative r-0"></div>
      </div>

      <div>
        <p ref="idea2" class="idea-text text-[25px]">Проанализируйте и разместите идею</p>
        <p ref="idea2_desc">С помощью AI улучшите описание вашей идеи, сделайте её более привлекательной для потенциальных покупателей и опубликуйте на нашей платформе</p>
      </div>

      <div class="w-[200px] justify-self-end">
        <div class="h-full animated-gradient relative r-0"></div>
      </div>

      <div>
        <p ref="idea3" class="idea-text text-[25px]">Продайте идею и получите прибыль</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const idea1 = ref<HTMLElement | null>(null)
const idea2 = ref<HTMLElement | null>(null)
const idea2_desc = ref<HTMLElement | null>(null)
const idea3 = ref<HTMLElement | null>(null)

onMounted(() => {
  const animateFrom = (element: HTMLElement | null, delay: number, index: number) => {
    if (element) {
      gsap.fromTo(element, 
        { scale: 1, opacity: 0.5 }, 
        {
          duration: 1,
          scale: 1.2,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              if (index > 0) {
                gsap.to([idea1.value, idea2.value, idea3.value, idea2_desc.value][index - 1], {
                  scale: 1,
                  opacity: 0.5,
                  duration: 2
                });
              }
            },
            onLeaveBack: () => {
              if (index > 0) {
                gsap.to([idea1.value, idea2.value, idea3.value, idea2_desc.value][index - 1], {
                  scale: 1,
                  opacity: 0.5,
                  duration: 2
                });
              }
            },
          },
        }
      );
    }
  };

  animateFrom(idea1.value, 0.5, 0);
  animateFrom(idea2.value, 1, 1);
  animateFrom(idea3.value, 1.5, 2);
});
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

@property --p {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

.animated-gradient {
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #ffffff var(--p), #191C1C var(--p));
  animation: dripEffect 4s ease-in-out infinite;
}

@keyframes dripEffect {
  0% {
    --p: 0%;
  }
  100% {
    --p: 100%;
  }
}
</style>