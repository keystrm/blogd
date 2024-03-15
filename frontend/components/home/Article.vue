<template>
    <div
        class="flex bg-white dark:bg-gray-800 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div class="flex flex-col justify-between p-6 flex-grow">
            <div>
                <div class="flex items-center mb-4">
                    <img class="w-10 h-10 rounded-full mr-4" :src="article.authorAvatar" :alt="article.author" />
                    <div class="text-sm">
                        <p class="text-gray-900 dark:text-white leading-none">{{ article.author }}</p>
                        <p class="text-gray-600 dark:text-gray-400">{{ article.publishDate }} · {{ article.readTime }}
                        </p>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="text-xl font-semibold text-gray-900 dark:text-white">{{ article.title }}</div>
                    <p class="text-base text-gray-700 dark:text-gray-400">{{ article.summary }}</p>
                </div>
            </div>
            <div>
                <!-- Your actions like bookmark here -->
            </div>
        </div>
        <div class="w-48 flex-none">
            <img class="object-cover h-full" :src="article.imageUrl" :alt="article.title">
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    article: Article;
}>();
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>