<template>
  <div class="space-y-14">
    <AppHeader :profile="profile" />

    <section>
      <SectionHeading title="Websites" />
      <WebsiteList :websites="websites" />
    </section>

    <section>
      <SectionHeading title="Stats" />
      <StatsCards :stats-img="statsImg" :top-langs-img="topLangsImg" :github-url="profile.githubUrl" />
    </section>

    <section>
      <SectionHeading title="Tech Stack" />
      <TechStack :categories="techCategories" />
    </section>

    <section>
      <SectionHeading title="Pinned Projects" />
      <PinnedProjects :repos="pinnedRepos" />
    </section>

    <section>
      <SectionHeading title="CDN Sponsors" />
      <SponsorList :sponsors="sponsors" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { profile, statsImg, topLangsImg, pinnedRepos, techCategories, websites, sponsors } from '~/data/portfolio'
</script>
