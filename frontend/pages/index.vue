<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
    <nav class="bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" class="text-gray-900 dark:text-white text-3xl font-bold">Blog</a>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-900 dark:hover:text-blue-400 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#" class="text-gray-900 dark:hover:text-blue-400 hover:text-blue-600 transition duration-300">About</a>
          <a href="#" class="text-gray-900 dark:hover:text-blue-400 hover:text-blue-600 transition duration-300">Contact</a>
        </div>
        <div class="space-x-4">
          <ButtonColorModeSwitcher/>
          <button class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300">Sign In</button>
          <button class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300">Register</button>
        </div>
      </div>
    </nav>
    <header class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 class="text-4xl font-bold">Welcome to My Blog</h1>
        <p class="max-w-xl mt-2">Explore insightful articles on design, programming, and technology.</p>
      </div>
    </header>
    <main class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-2">Article Title Here</h2>
        <p class="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <a href="#" class="inline-block mt-4 text-blue-600 dark:text-blue-400">Read more →</a>
      </article>
      <!-- Repeat for other articles -->
    </main>
    <footer class="bg-white dark:bg-gray-800 text-center py-4">
      <p class="text-gray-900 dark:text-gray-200">&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Vue 3 Script Setup component logic goes here
</script>

<style scoped>
/* Additional styling can be added here, if needed */
</style>
