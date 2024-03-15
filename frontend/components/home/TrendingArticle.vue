<template>
    <div
        class="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
        <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" :src="article.authorAvatar" :alt="`${article.author}'s avatar`">
        </div>
        <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ article.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400">{{ article.author }} · {{ article.publishDate }} · {{
                article.readTime }} read</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    article: TrendingArticle;
}>();
</script>

<style scoped>
/* Your additional styles */
</style>