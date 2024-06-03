import { defineStore } from 'pinia';

export const useContactStore = defineStore('contacts', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
