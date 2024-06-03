import { defineStore } from 'pinia';

export const useBannerStore = defineStore('banners', {
   state: () => ({
      state: {
         data: [],
         loading: false,
      },
   }),
});
