<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
    <li v-for="website in websites" :key="website.url">
      <WebsiteCard :website="website" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Website } from '~~/shared/types'

defineProps<{ websites: Website[] }>()
</script>
