import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('teams', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
