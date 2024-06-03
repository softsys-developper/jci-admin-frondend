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
import { useAuthSignUp } from '@/hooks/auth.hook';

const { SignUp } = useAuthSignUp();
</script>

<template>
   <div class="flex justify-center items-center h-screen overflow-auto">
      <form
         class="w-4/12 max-md:w-11/12 p-8 rounded-md bg-white space-y-2"
         @submit="SignUp"
      >
         <div class="flex flex-col">
            <span class="text-3xl font-black">S'inscrire</span>
            <span class="text-lg"> Administration JCI </span>
         </div>

         <FormField v-slot="{ componentField }" name="username">
            <FormItem>
               <FormLabel>Nom d'utilisateur</FormLabel>
               <FormControl>
                  <Input
                     id="id_input_username"
                     type="text"
                     placeholder="seguela"
                     v-bind="componentField"
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>

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

         <!-- Site web -->
         <FormField v-slot="{ componentField }" name="name">
            <FormItem>
               <FormLabel>Nom du site web</FormLabel>
               <FormControl>
                  <Input
                     id="id_input_name"
                     type="text"
                     placeholder="Seguéla"
                     v-bind="componentField"
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>

         <!-- Logo -->
         <FormField v-slot="{ componentField }" name="logo">
            <FormItem>
               <FormLabel>Logo</FormLabel>
               <FormControl>
                  <Input
                     id="id_input_logo"
                     type="file"
                     placeholder="* * * * *"
                     v-bind="componentField"
                  />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>

         <div class="pt-4 gap-4 flex">
            <Button type="submit" class=""> S'inscrire </Button>
            <Button
               type="button"
               class="bg-transparent text-black hover:bg-gray-200"
            >
               <RouterLink to="/signin" class="underline text-base">
                  Se connecter</RouterLink
               >
            </Button>
         </div>
      </form>
   </div>
</template>
