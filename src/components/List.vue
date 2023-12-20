<script setup>
import { useTodoStore } from "@/stores/todos";

const store = useTodoStore();

const todos = store.todos;

const deleteTodo = (todoId) => {
  store.removeTodo(todoId);
};
</script>

<template>
  <ul class="mt-4">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="text-black flex flex-row justify-between py-2 border border-b-gray-400 border-t-transparent border-x-transparent"
    >
      <div
        class="flex flex-row items-center space-x-4 text-lg font-semibold text-gray-700"
      >
        <input type="checkbox" v-model="todo.completed" />
        <p :class="{ 'line-through': todo.completed }">{{ todo.text }}</p>
      </div>

      <button
        class="text-sm p-2 bg-gray-500 text-white rounded-lg"
        @click="deleteTodo(todo.id)"
      >
        Remove
      </button>
    </li>
  </ul>
</template>
