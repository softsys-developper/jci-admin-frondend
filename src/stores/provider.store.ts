import { defineStore } from 'pinia';

export const useProviders = defineStore('data', {
   state: () => ({
      pastPresidents: {
         data: [],
         loading: false,
      },
      banners: {
         data: [],
         loading: false,
      },
   }),
});
