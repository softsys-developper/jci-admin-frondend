<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuthSign } from '@/hooks/auth.hook';

const { SignIn } = useAuthSign();
</script>

<template>
   <div class="flex justify-center items-center h-screen overflow-auto">
      <form
         class="w-4/12 max-md:w-11/12 p-8 rounded-md bg-white space-y-2"
         @submit="SignIn"
      >

      <div >
      <span class="text-3xl font-black">Se Connecter</span>
            <span class="text-lg "> Administration JCI </span>
         </div>

    

     

         <!-- email -->
         <FormField v-slot="{ componentField }" name="email">
            <FormItem>
               <FormLabel>Adresse email</FormLabel>
               <FormControl>
                  <Input
                     id="id_input_email"
                     type="email"
                     placeholder="jic-ci@softsys.ci"
                     v-bind="componentField"
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>

               <!-- Password -->
               <FormField v-slot="{ componentField }" name="password">
            <FormItem>
               <FormLabel>Mot de pass</FormLabel>
               <FormControl>
                  <Input
                     id="id_input_password"
                     type="password"
                     placeholder="* * * * *"
                     v-bind="componentField"
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>

        

         <div class="pt-4 gap-4 flex">
            <Button type="submit" class=""> Se Connecter </Button>
            <Button type="button" class="bg-transparent text-black hover:bg-gray-200"> <RouterLink to="/signup" class="underline text-base" > S'incrire</RouterLink> </Button>
         </div>
         
      </form>


    
   </div>
</template>
