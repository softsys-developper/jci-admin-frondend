import { useMutation, useQuery } from '@tanstack/vue-query';
import axios from 'axios';

export const AllService = (URL: string) => {
   // Get All Data
   const FindMany = async (params?: object, queryKey?: string) => {
      const { isPending, error, data } = useQuery({
         queryKey: [queryKey],
         queryFn: () => axios.post(URL, params),
      });

      return {
         isPending,
         error,
         data,
      };
   };

   // Get Show Data
   const FindOne = async (params?: object, queryKey?: string) => {
      const { isPending, error, data } = useQuery({
         queryKey: [queryKey],
         queryFn: () => axios.post(URL, params),
      });

      return {
         isPending,
         error,
         data,
      };
   };

   // Get Created New Data
   const Created = async (params: any, no?: any) => {
      try {
         let datas: any;

         if (no) {
            datas = params;
         } else {
            datas = new FormData();
            const Key = Object.keys(params);
            for (let i = 0; i < Key.length; i++) {
               const el = Key[i];
               datas.append(el, params[el]);
            }
         }

         const { data } = await axios.post(URL, datas);

         return {
            data,
         };
      } catch (error: any) {
         return {
            error: error,
         };
      }
   };

   // Get Update existant Data
   const Updated = async (params?: object, queryKey?: string) => {
      const { isPending, error, data } = useMutation({
         mutationKey: [queryKey],
         mutationFn: () => axios.post(URL, params),
      });

      return {
         isPending,
         error,
         data,
      };
   };

   // Get Created Data
   const Remove = async (params?: object, queryKey?: string) => {
      const { isPending, error, data } = useMutation({
         mutationKey: [queryKey],
         mutationFn: () => axios.post(URL, params),
      });

      return {
         isPending,
         error,
         data,
      };
   };

   return {
      FindMany,
      FindOne,
      Created,
      Updated,
      Remove,
   };
};
