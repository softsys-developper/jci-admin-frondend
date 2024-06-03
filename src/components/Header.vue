<script setup>
import { useAuthSign } from '@/hooks/auth.hook';

   const { SignOut } = useAuthSign()
</script>

<template>
    
    <div class="flex justify-between h-full items-center w-11/12 m-auto">
        
        <div class="flex items-center gap-2">
            <i class="ri-home-office-line text-2xl relative top-[-1px]"></i>
            <span class="font-semibold text-xl">Dashbord</span> 
        </div>

        <div class="flex items-center gap-1 cursor-pointer" @click="SignOut">
            <i class="ri-logout-box-line text-xl relative top-[-2px]"></i>
            <span class="font-semibold text-lg">Deconnexion</span> 
        </div>

    </div>

</template>