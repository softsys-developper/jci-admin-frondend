import { defineStore } from 'pinia';

export const useBlogStore = defineStore('Blog', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
