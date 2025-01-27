<template>
    <SectionWelcome class="min-h-[70vh]">
        <div class="relative flex items-center justify-between w-full p-8">
            <h1 class="font-league text-kitanik">Kitanik</h1>

            <div class="flex flex-col gap-y-8 items-center w-full">
                <p class="text-subhead">Monetize your startup Ideas</p>

                <AppButton @click="handleStart">
                    Get started!
                </AppButton>
            </div>
        </div>
    </SectionWelcome>

    <section class="mx-[110px]">
        <div class="flex justify-between items-start gap-x-16">
            <div class="flex flex-col items-center text-center max-w-[30%]">
                <h3 class="font-league text-h3">Pitch</h3>
                <p class="text-subhead">Evaluate your idea in seconds with AI</p>
            </div>
            <div class="flex flex-col items-center text-center max-w-[30%]">
                <h3 class="font-league text-h3">Post</h3>
                <p class="text-subhead">Post an idea in a minute and get the attention of investors</p>
            </div>
            <div class="flex flex-col items-center text-center max-w-[30%]">
                <h3 class="font-league text-h3">Profit</h3>
                <p class="text-subhead">Sell an idea or raise money</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
async function handleStart() {
    navigateTo('/create',)
}
</script>