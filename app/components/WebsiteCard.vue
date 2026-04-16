<template>
  <a
    :href="website.url"
    target="_blank"
    rel="noopener noreferrer"
    class="card-base card-interactive p-4 btn-press flex items-center gap-4 group"
  >
    <div class="flex-1 min-w-0">
      <h3 class="text-sm font-semibold text-text-primary truncate">{{ website.name }}</h3>
      <p class="text-xs text-text-muted mt-0.5 truncate">{{ website.description }}</p>
    </div>
    <Icon name="mdi:arrow-top-right" size="18" class="text-text-faint group-hover:text-primary transition-colors shrink-0" />
  </a>
</template>

<script setup lang="ts">
import type { Website } from '~~/shared/types'

defineProps<{ website: Website }>()
</script>
