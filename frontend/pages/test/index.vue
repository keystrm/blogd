<template>
    <div class="menu bg-blue-500 text-white sticky top-0 z-50 p-4" ref="menu">MENU</div>
    <div class="content">
    <div class="trend bg-red-500 text-white p-4 my-2">TREND</div>
    <div class="flex">
        <div class="article bg-green-500 text-white p-4 my-2">ARTICLE</div>
    <!-- B Section initially will not have sticky positioning applied via Tailwind -->
    <div class="b-section bg-yellow-500 text-white p-4 my-2" ref="bSection">B</div>
    </div>
    
</div>
  </template>
<script setup>
import { onMounted, ref } from 'vue';

const menu = ref(null);
const bSection = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

const handleScroll = () => {
  const menuBottom = menu.value.getBoundingClientRect().bottom;
  const bTop = bSection.value.getBoundingClientRect().top;
  
  // Check if B section is about to collide with Menu
  if (bTop <= menuBottom) {
    // Make B section sticky below the menu using Tailwind classes
    bSection.value.classList.add('sticky', 'top-0');
    bSection.value.style.top = `${menuBottom}px`;
  } else {
    // Remove sticky positioning and reset top style
    bSection.value.classList.remove('sticky', 'top-0');
    bSection.value.style.top = '';
  }
};
</script>
  