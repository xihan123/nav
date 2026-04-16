<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <a
      v-for="(repo, index) in repos"
      :key="repo.name"
      :href="repo.url"
      target="_blank"
      rel="noopener noreferrer"
      class="card-base card-interactive p-2 btn-press block"
      :style="{ animation: `card-enter 0.3s ease-out ${index * 60}ms both` }"
    >
      <img
        :src="repo.cardImg"
        :alt="repo.name"
        class="w-full aspect-[2.35/1]"
        loading="lazy"
        decoding="async"
      >
    </a>
  </div>
</template>

<script setup lang="ts">
import type { PinnedRepo } from '~~/shared/types'

defineProps<{ repos: PinnedRepo[] }>()
</script>
