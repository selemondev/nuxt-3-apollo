<script lang="ts" setup>
// This code is importing a type called CharacterTypes from a 'CharactersType' file. It then defines a GraphQL query that retrieves a list of characters and their associated information, such as name, image, gender, etc. The `useQuery` composable is then called, passing in the query, to fetch the data from the GraphQL API. The composable returns an object with properties for the query result, any errors, and the loading state. The result is destructured and is typed with CharacterTypes.
import type { CharacterTypes } from "../Types/CharactersType"
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

const { result, error, loading } = useQuery<CharacterTypes>(query);
</script>

<template>
  <div>
    <div v-if="error" class="grid-layout w-full min-h-screen">
      <h1 class="text-red-500 font-bold text-xl md:text-2xl">{{ error }}</h1>
    </div>
    <div v-if="loading" class="grid-layout w-full min-h-screen">
      <Icon name="ph:spinner" class="text-6xl animate-spin text-red-500" />
    </div>
    <div class="grid-layout cursor-pointer md:flex md:flex-wrap md:justify-center">
      <div v-for="character in result?.characters?.results" :key="character.id">
          <div class="h-56 w-72 rounded-md bg-gray-300/60 dark:bg-[#3C3E44]/40 m-2 flex justify-between  md:w-[400px]">
            <div>
              <nuxt-img :src="character.image" class="h-full w-40 md:w-52" />
            </div>
            <div class="space-y-3 w-52 p-2">
              <h1 class="text-xl font-bold dark:text-white md:text-2xl">{{ character.name }}</h1>
              <div class="flex items-center space-x-2">
                <p :class="[character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500']"
                  class="h-3 w-3 rounded-full"></p>
                <h1 class="text-xl font-semibold dark:text-white">{{  character.status }}</h1>
                <span class="dark:text-white"> - </span>
                <h1 class="text-xl font-semibold dark:text-white">{{ character.species  }}</h1>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-white">{{ character.gender  }}</h1>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-white">{{ character.location.name  }}</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
