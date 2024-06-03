import { defineStore } from 'pinia';

export const usePastsPresidents = defineStore('PastsPresidents', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
