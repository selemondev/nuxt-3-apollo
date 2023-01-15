<script setup lang="ts">
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
