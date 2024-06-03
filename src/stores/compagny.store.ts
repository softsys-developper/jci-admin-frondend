import { defineStore } from 'pinia';

export const useCompagnyStore = defineStore('compagny', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
