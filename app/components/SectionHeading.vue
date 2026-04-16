<template>
  <div class="mb-6 flex items-center gap-3">
    <div class="w-[1px] h-5 rounded-sm bg-primary" aria-hidden="true" />
    <h2 class="text-lg sm:text-xl font-bold text-text-primary">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
