<template>
    <div
        class="flex items-center space-x-4 p-4 bg-white dark:bg-surface-main-dark rounded-lg hover:bg-gray-100 dark:hover:bg-surface-main-dark-hover transition-colors duration-300 cursor-pointer">
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