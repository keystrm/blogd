<template>
    <div class="flex flex-row items-center justify-center">
        <ButtonIconsNight v-show="colorMode.preference === 'light'"
            class="theme-icon text-typography_primary_light dark:text-typography_primary_dark" width="28" height="28"
            @click="toggleTheme" />
        <ButtonIconsLight v-show="colorMode.preference === 'dark'"
            class="theme-icon text-typography_primary_light dark:text-typography_primary_dark" width="28" height="28"
            @click="toggleTheme" />
    </div>
</template>

<script setup>

const colorMode = useColorMode();
const PrimeVue = usePrimeVue();

const getThemes = (currentTheme) => {
    const themes = {
        dark: 'aura-dark-blue',
        light: 'aura-light-blue'
    };

    let nextTheme;
    let currentThemeName;

    if (currentTheme === 'dark') {
        currentThemeName = themes.dark;
        nextTheme = themes.light;
    } else {
        currentThemeName = themes.light;
        nextTheme = themes.dark;
    }

    return { currentTheme: currentThemeName, nextTheme: nextTheme };
}

const toggleTheme = () => {
    PrimeVue.changeTheme(getThemes(colorMode.preference).currentTheme, getThemes(colorMode.preference).nextTheme, 'theme-link', () => { });
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};


onMounted(() => {

    setTimeout(() => {
        if (colorMode.preference === 'system') {
            colorMode.preference = colorMode.value
        }
        PrimeVue.changeTheme(getThemes(colorMode.preference).nextTheme, getThemes(colorMode.preference).currentTheme, 'theme-link', () => { })
    }, 200)

})
</script>

<style scoped>
.theme-icon {
    @apply w-7 h-7 cursor-pointer transition-transform duration-100;
}

.theme-icon:hover {
    @apply scale-125;
}
</style>
