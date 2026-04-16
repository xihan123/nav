<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    <div
      v-for="(star, i) in stars"
      :key="i"
      class="absolute w-px h-px bg-white"
      :style="{
        top: star.top,
        left: star.left,
        opacity: star.opacity,
        animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
      }"
    />
    <div
      class="absolute w-px h-px bg-white"
      style="top: 12%; right: -5%; animation: shooting-star 1.5s ease-in 8s infinite;"
    />
    <div
      class="absolute w-px h-px bg-white"
      style="top: 40%; right: -5%; animation: shooting-star 1.5s ease-in 14s infinite;"
    />
  </div>
</template>

<script setup lang="ts">
const stars = Array.from({ length: 30 }, (_, i) => ({
  top: `${(i * 37 + 3) % 97}%`,
  left: `${(i * 41 + 8) % 96}%`,
  opacity: 0.15 + (i % 5) * 0.06,
  duration: 3.4 + (i % 4) * 0.7,
  delay: (i * 0.4) % 3.5,
}))
</script>
