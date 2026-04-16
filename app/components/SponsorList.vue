<template>
  <ul class="flex flex-wrap gap-2.5 list-none p-0 m-0">
    <li v-for="sponsor in sponsors" :key="sponsor.name">
      <a :href="sponsor.url" target="_blank" rel="noopener noreferrer" class="badge-pill gap-2">
        <span>{{ sponsor.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Sponsor } from '~~/shared/types'

defineProps<{ sponsors: Sponsor[] }>()
</script>
