<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div>
    <h1>{{ $t("home_title") }}</h1>
    <NuxtLink :to="localPath('/about')">{{ $t("about_btn") }}</NuxtLink>
  </div>
</template>
