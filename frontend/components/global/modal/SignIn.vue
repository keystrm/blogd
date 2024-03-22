<template>
    <Dialog v-model:visible="visible" modal header=" " :draggable="false">
            <h2 class="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
            <InputText placeholder="Username" class="w-full mb-4" />
            <InputText type="password" placeholder="Password" class="w-full mb-6" />

            <!-- Social Media Login Section -->
            <div class="flex justify-center space-x-3 mb-6">
                <!-- Google Login -->
                <button class="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white shadow">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg"><path d="M255.1 133.6c0-9.3-.8-18.3-2.3-27H130v51.2h70.5c-3 16-11.6 29.5-24.8 38.6v32.2h40.1c23.5-21.7 37.1-53.6 37.1-94.8zM130 262c35.3 0 65-11.7 86.6-31.6l-40.1-32.2c-11.7 7.9-26.7 12.5-42.7 12.5-32.8 0-60.5-22.1-70.4-51.8H19.6v32.5C39.2 228.8 82 262 130 262zM18.5 156.2V123.7H58c1.6 4.4 3.8 8.5 6.6 12.2 2.8 3.8 6.1 7.2 10 10v.2c-14.6 15.2-35.9 24.9-55.6 24.9-1.3 0-2.7-.1-4-.1zm0-73.4c1.3 0 2.7-.1 4-.1 19.7 0 41 9.7 55.6 24.9 3.9 2.8 7.2 6.2 10 10 2.8 3.7 5 7.8 6.6 12.2H58v32.5H18.5V82.8z"/></svg>
                </button>
                <!-- Facebook Login -->
                <button class="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91V142.4c0-25.35 12.42-50.36 52.24-50.36h40.42V6.26S277.25 0 240.5 0c-73.21 0-121.39 44.61-121.39 126.06v70.24H71.69V288h47.41v224h96.78V288z"/></svg>
                </button>
                <!-- Add more social media buttons here -->
            </div>

            <!-- Login Button -->
            <Button label="Login" class="w-full mb-4" />

            <!-- Sign Up Link -->
            <div class="text-center">
                <p class="text-gray-600 dark:text-gray-300">Don't have an account? 
                    <a href="/signup" class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">Sign up</a>
                </p>
            </div>
    </Dialog>
</template>
<script lang="ts" setup>
const visible = defineModel({type:Boolean})
console.log(visible)
</script>