<template>
    <div class="layout-container bg-white text-black min-h-screen">
        <!-- Навигационная панель -->
        <header class="p-4  bg-white">
            <nav class="container mx-auto flex justify-between items-center">
                <NuxtLink to="/" class="text-2xl font-bold text-kitanik-purple-500">Logo</NuxtLink>
                <ul class="flex space-x-16">
                    <li>
                        <NuxtLink to="/" class="hover:text-kitanik-purple-500">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="hover:text-kitanik-purple-500">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="hover:text-kitanik-purple-500 font-bold">Sign in</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- Основной контент -->
        <main class="container mx-auto px-0 py-8">
            <NuxtPage />
        </main>

        <!-- Футер -->
        <footer class="p-4 bg-gray-200 text-center">
            <p>&copy; {{ new Date().getFullYear() }} Kitanik</p>
        </footer>
    </div>
</template>

<script setup>
</script>

<style scoped>
.layout-container {
    font-family: 'Roboto', sans-serif;
}
</style>