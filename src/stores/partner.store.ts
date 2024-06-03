import { defineStore } from 'pinia';

export const usePartnerStore = defineStore('Partner', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
