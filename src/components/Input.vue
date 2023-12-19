<script setup>
import { ref } from "vue";

const newToDo = ref("");
const addToDo = () => {
  newToDo.value = "";
};
</script>

<template>
  <form @submit.prevent="addToDo" class="flex flex-row space-x-5">
    <input
      v-model="newToDo"
      placeholder="Enter To-Do"
      class="bg-gray-50 p-3 rounded-lg outline-none text-lg text-gray-700 focus:outline-blue-400 w-full"
    />
    <button class="bg-blue-400 p-4 text-gray-50 font-bold text-lg rounded-xl">Add</button>
  </form>
</template>
