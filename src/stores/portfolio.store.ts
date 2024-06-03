import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('Portfolio', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
