<script setup lang="ts">
// This code is using the useHead composable to dynamically set the title and link properties of the <head> section in the HTML document. It sets the title to "Ricky and Morty" and link rel to "icon" type is "svg" and the href to an SVG icon of a fire.
useHead({
  title: "Ricky and Morty",
  link: [{ rel: 'icon', type: 'svg', href: "https://api.iconify.design/fluent-emoji-flat:fire.svg" }],
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>