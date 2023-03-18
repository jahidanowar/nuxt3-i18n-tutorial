<script setup lang="ts">
const localPath = useLocalePath();
</script>
<template>
  <div>
    <h1>{{ $t("about_title") }}</h1>
    <NuxtLink :to="localPath('/')">{{ $t("home_btn") }}</NuxtLink>
  </div>
</template>
