<script lang="ts" setup>
import type { CharacterTypes } from "../Types/CharacterInterface"
const query = gql`
query {
  characters {
    results {
      id
      name
      image
      gender
      species
      status
      location {
        id
        dimension
        name
      }
    }
  }
}
`;

const { data } = useAsyncQuery<CharacterTypes>(query);
</script>

<template>
  <div class="grid-layout cursor-pointer md:flex md:flex-wrap md:justify-center">
    <div v-for="character in data?.characters?.results" :key="character.id">
      <div class="h-64 w-72 rounded-md bg-gray-300/60 dark:bg-[#3C3E44]/40 m-2 md:w-[400px]">
        <nuxt-img :src="character.image" class="h-full w-40 md:w-52" />
      </div>
    </div>
  </div>
</template>
