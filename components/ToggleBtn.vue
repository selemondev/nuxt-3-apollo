<script lang="ts" setup>
// This code uses the useColorMode composable to obtain the current color mode preference and creates an onClick function to toggle between light and dark mode by changing the preference value using a ternary operator.
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
    <button @click="onClick"
        class="py-1 px-2 bg-gray-200 rounded-md dark:bg-gray-200/10 dark:hover:bg-gray-200/20 transition-delay-timer">
        <ColorScheme placeholder="...">
            <Icon v-if="colorMode.value === 'dark'" name="ph:sun" class="w-4 h-4 dark:text-white" />
            <Icon v-else name="ph:moon" class="w-4 h-4" />
        </ColorScheme>
    </button>
</template>
