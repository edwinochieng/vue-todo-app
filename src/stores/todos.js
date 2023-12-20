import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(newTodo) {
      const randomId = Math.floor(Math.random() * 1000) + 1;
      this.todos.push({ id: randomId, text: newTodo, completed: false });
    },

    removeTodo(todoId) {
      const index = this.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
  },
});
