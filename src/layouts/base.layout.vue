<script setup>
import SideBar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { useFindAll } from "@/hooks/find.hook";
import { ref } from "vue";
const { COMPAGNY: Company } = useFindAll();

const closeAndOpenMenu = ref(false);
</script>

<template>
  <!-- Header -->

  <main class="w-full h-[100vh]">
    <section class="w-full flex flex-col">
      <div class="w-full bg-white h-16 fixed top-0 z-50">
        <!-- Header  -->
        <Header />
      </div>

      <div
        class="border-y-[1px] py-8 mt-16 max-md:sticky max-md:top-0 max-md:bg-white max-md:z-50 w-full"
      >
        <div class="w-11/12 m-auto flex gap-4">
          <div class="" @click="closeAndOpenMenu = !closeAndOpenMenu">
            <i class="ri-menu-2-line text-xl max-md:flex hidden"></i>
          </div>
          <h1 class="text-3xl font-semibold">
            {{ Company?.name ? Company?.name : "JCI ADMIN" }}
          </h1>
        </div>
      </div>

      <div class="flex flex-row w-11/12 m-auto my-8 gap-16">
        <div
          v-if="closeAndOpenMenu"
          class="w-3/12 max-md:flex-col max-md:fixed max-md:top-32 max-md:p-4 max-md:z-50 max-md:inset-0 max-md:bg-white max-md:w-full max-md:shadow-lg"
        >
          <!-- Side Menu -->
          <SideBar />
        </div>

        <div class="w-3/12 max-md:hidden">
          <!-- Side Menu -->
          <SideBar />
        </div>

        <!-- Content  -->
        <div class="flex flex-col w-9/12 max-md:w-full">
          <slot name="content" />
        </div>
      </div>
    </section>
  </main>
</template>
