import { reactive } from 'vue';

/**
 * Register
 * @param null
 * @returns {}
 */
export const useAuthSignUp = () => {
   const state = reactive({
      error: '',
   });

  
   return {
      state,
   };
};


