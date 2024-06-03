import { ref } from 'vue';

/**
 * Updated
 * @param null
 * @returns {}
 */
export const useUpdated = () => {
   const state = ref({
      title: '',
      content: '',
      original_url: '',
   });

   const UPDATED = () => {};

   return {
      state,
      UPDATED,
   };
};
