<template>
   <ul class="flex flex-col">
      <li
         class="h-10 px-2 cursor-pointer hover:bg-gray-300 rounded-md flex items-center text-sm font-semibold"
         v-for="MENU in stateSideBar?.menu"
         :class="$route.name == MENU.route ? 'opacity-100 font-bold' : 'opacity-70'"
      >
         <RouterLink
            :to="{ name: MENU.route }"
            class="w-full h-full flex items-center text-base"
         >
            {{ MENU.name }}
         </RouterLink>
      </li>
   </ul>
</template>
<script setup>
import { useSideBar } from '@/hooks/sidebar.hook';
const { stateSideBar } = useSideBar();
</script>
<style lang="scss" scoped></style>
