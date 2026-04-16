<template>
  <div class="flex flex-col sm:flex-row items-stretch justify-center gap-4">
    <a
      v-for="card in cards"
      :key="card.alt"
      :href="githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="card-base p-2 btn-press flex-1"
    >
      <img :src="card.src" :alt="card.alt" class="w-full aspect-[2.5/1] object-contain" loading="lazy" decoding="async">
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  statsImg: string
  topLangsImg: string
  githubUrl: string
}>()

const cards = computed(() => [
  { src: props.statsImg, alt: 'GitHub Stats' },
  { src: props.topLangsImg, alt: 'Top Languages' },
])
</script>
