<template>
  <header class="flex flex-col sm:flex-row items-center sm:items-start gap-5 py-6">
    <img
      :src="profile.avatar"
      :alt="profile.name"
      width="80"
      height="80"
      fetchpriority="high"
      decoding="async"
      class="w-20 h-20 object-cover rounded-xl border border-border shadow-md"
    >
    <div class="text-center sm:text-left">
      <h1 class="text-2xl sm:text-3xl font-bold text-text-primary">
        {{ profile.name }}
      </h1>
      <p class="text-sm text-text-muted mt-1 flex items-center justify-center sm:justify-start gap-1">
        <Icon name="mdi:map-marker" size="14" />
        {{ profile.location }}
      </p>
      <p v-if="profile.bio" class="text-sm text-text-secondary mt-2 max-w-md">
        {{ profile.bio }}
      </p>
      <div class="flex items-center justify-center sm:justify-start gap-2 mt-3 flex-wrap">
        <img
          :src="`https://img.shields.io/github/followers/${profile.githubUsername}?style=social`"
          alt="followers"
          width="108"
          height="20"
          loading="lazy"
          decoding="async"
        >
        <img
          :src="`https://img.shields.io/github/stars/${profile.githubUsername}?style=social`"
          alt="stars"
          width="100"
          height="20"
          loading="lazy"
          decoding="async"
        >
        <img
          :src="`https://visitor-badge.laobi.icu/badge?page_id=${profile.githubUsername}.${profile.githubUsername}`"
          alt="visitors"
          width="112"
          height="20"
          loading="lazy"
          decoding="async"
        >
      </div>
    </div>
    <a
      :href="profile.githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="访问 GitHub 主页"
      class="sm:ml-auto card-base card-interactive px-4 py-2 flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
    >
      <Icon name="mdi:github" size="20" />
      <span class="hidden sm:inline">GitHub</span>
    </a>
  </header>
</template>

<script setup lang="ts">
import type { ProfileData } from '~~/shared/types'

defineProps<{ profile: ProfileData }>()
</script>
