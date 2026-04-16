<template>
  <div class="space-y-5">
    <div v-for="cat in categories" :key="cat.title">
      <h3 class="text-sm font-medium text-text-secondary mb-2.5">{{ cat.title }}</h3>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="badge in cat.badges"
          :key="badge.label"
          :href="badge.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-press inline-block"
        >
          <img :src="badge.img" :alt="badge.label" height="28" loading="lazy" decoding="async">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechCategory } from '~~/shared/types'

defineProps<{ categories: TechCategory[] }>()
</script>
