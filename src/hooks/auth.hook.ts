import { reactive } from 'vue';
import {
   AuthSignInValidate,
   AuthSignUpValidate,
} from '@/validations/auth.validate';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { AllService } from '@/services/index.services';
import { URL_RESQUESTS } from '@/api_urls/index';
import { useToast } from '@/components/ui/toast/use-toast';

const { toast } = useToast();

/**
 * Register
 * @param null
 * @returns {}
 */
export const useAuthSignUp = () => {
   const state = reactive({
      error: '',
   });

   const formSchema = toTypedSchema(AuthSignUpValidate);

   const { handleSubmit } = useForm({
      validationSchema: formSchema,
   });

   const SignUp = handleSubmit(async (values) => {
      const { data, error } = await AllService(
         URL_RESQUESTS.AUTH_REGISTER
      ).Created(values);

      if (data) {
         // localStorage.setItem('nToken', data.token);
         location.assign('/signin');
      } else {
         toast({
            title: `${error.response.data?.path}`,
            description: `${error.response.data?.message}`,
            variant: 'destructive',
         });
      }
   });

   return {
      state,
      SignUp,
   };
};

/**
 * Login
 * @param null
 * @returns {}
 */
export const useAuthSign = () => {
   const state = reactive({
      loading: false
   });

   //
   const formSchema = toTypedSchema(AuthSignInValidate);

   const { handleSubmit } = useForm({
      validationSchema: formSchema,
   });

   const SignIn = handleSubmit(async(values) => {
      state.loading = true
      const { data, error } = await AllService(
         URL_RESQUESTS.AUTH_LOGIN
      ).Created(values, true);

      if (data) {
         state.loading = false
         localStorage.setItem('nToken', data.token);
         location.assign('/');
      } else {

         state.loading = false
         toast({
            title: `${error.response.data?.path}`,
            description: `${error.response.data?.message}`,
            variant: 'destructive',
         });
      }
   });

   //
   const SignOut = () => {
      localStorage.removeItem('nToken');
      location.assign('/signin');
   };

   return {
      state,
      SignIn,
      SignOut,
   };
};
