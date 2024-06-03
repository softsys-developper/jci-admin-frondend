<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="A Propos"
        content="Une description de votre entreprise sur votre site web est essentiel"
        :isCreated="true"
      />

      <main class="flex flex-col">
        <!-- Ajouter une image(s) -->

        <div class="flex flex-col gap-2">
          <div class="">
            <span class="text-sm font-black">Ajouter des images</span>
          </div>
          <div class="grid grid-cols-2 max-md:gap-2 gap-16 w-full">
            <div v-for="i in Images">
              <Label
                :for="i.id"
                class="inline-flex border-[1px] rounded-md border-dashed max-md:h-32 h-64 w-full flex-col justify-center items-center"
              >
                <div
                  class="flex flex-col justify-center items-center"
                  v-if="i.img == null"
                >
                  <i class="ri-image-add-line text-6xl"></i>
                  <span class="text-sm font-semibold">Upload une image</span>
                </div>

                <div class="w-full h-full rounded-md" v-else>
                  <img
                    :src="i.img"
                    class="h-full w-full object-contain p-2 rounded-md"
                    alt=""
                  />
                </div>
              </Label>
              <Input
                @change="UploadImage($event, i.id)"
                :id="i.id"
                type="file"
                class="w-full size-[0.01px] hidden"
              />
            </div>
          </div>
        </div>

        <!-- Note Reference -->
        <div class="flex flex-col gap-2 mt-8 w-full">
          <div class="">
            <span class="text-sm font-black">Statistique</span>
          </div>

          <div class="grid grid-cols-4 max-md:grid-cols-2 gap-4 w-full">
            <div v-for="ActivityNumbers in Stats">
              <div class="w-full relative bg-white rounded-sm">
                <Label
                  :for="ActivityNumbers.id"
                  class="absolute top-0 p-2 rounded-t-sm text-white font-bold bg-slate-500 w-full"
                >
                  {{ ActivityNumbers.name }}
                </Label>
                <Input
                  v-model="ActivityNumbers.count"
                  type="text"
                  :id="ActivityNumbers.id"
                  class="w-full h-32 text-3xl text-center bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-8 gap-2">
          <span class="text-sm font-black">Description</span>
          <Textarea
            v-model="description"
            placeholder="Type your message here."
            id="created_description"
            class="h-64 text-base"
          />

          <div class="flex justify-between">
            <span></span>
            <button
              class="bg-gray-800 text-white font-medium px-4 py-1 rounded-md"
              @click="CREATED_ABOUTS"
            >
              Enregistre
            </button>
          </div>
        </div>
      </main>
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import Heading from "@/components/heading.vue";
import BaseLayout from "@/layouts/base.layout.vue";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ref, onMounted } from "vue";

import { URL_RESQUESTS } from "@/api_urls";
import { useCompagnyStore } from "@/stores/compagny.store";
import axios from "axios";
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();

const Images = ref([
  {
    id: "file_image_1",
    img: null,
    file: "",
  },
  {
    id: "file_image_2",
    img: null,
    file: "",
  },
]);

const Stats = ref([
  {
    id: "stats_1",
    name: "Formations",
    count: "0",
  },
  {
    id: "stats_2",
    name: "Conventions",
    count: "0",
  },
  {
    id: "stats_3",
    name: "Activités",
    count: "0",
  },
  {
    id: "stats_4",
    name: "Membres",
    count: "0",
  },
]);

const description = ref("");
const isCountToChange = ref();

const UploadImage = (e, id) => {
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    Images.value.map((el: any, index: any) => {
      if (el.id == id) {
        el.img = e.target.result;
        el.file = file;
        isCountToChange.value = index + 1;
        console.log(isCountToChange.value);
      }

      return {
        ...el,
      };
    });
  };
  reader.readAsDataURL(file);
};

import { useFindAll } from "@/hooks/find.hook";
const { COMPAGNY: Company, FindAll }: any = useFindAll();

const FillFields = () => {
  //   Images
  console.log("F", Company.value);
  Images.value[0].img = Company.value.about_image_1;
  Images.value[1].img = Company.value.about_image_2;

  //   Stats
  Stats.value[0].count = Company.value.stats_1 || 1;
  Stats.value[1].count = Company.value.stats_2 || 0;
  Stats.value[2].count = Company.value.stats_3 || 0;
  Stats.value[3].count = Company.value.stats_4 || 0;

  //   Content
  description.value = Company.value.description || "A Propos pas encore define";
};

onMounted(async () => {
  if (!Company.value.name) {
    FindAll("compagny", FillFields);
  } else {
    FillFields();
  }
});

// Created About / Updated
const CREATED_ABOUTS = async () => {
  try {
    const dataAbouts = new FormData();
    dataAbouts.append("description", description.value);
    dataAbouts.append("type", "About");
    dataAbouts.append("isC", isCountToChange.value);

    for (let i = 0; i < Stats.value.length; i++) {
      const sts = Stats.value[i];
      dataAbouts.append(sts.id, sts.count);
    }

    let ImageAbouts = Images.value.map((el) => {
      return el.file;
    });

    ImageAbouts = ImageAbouts.filter((el) => {
      return el != "";
    });

    if (ImageAbouts.length == 2) {
      for (let i = 0; i < ImageAbouts.length; i++) {
        const sts = ImageAbouts[i];

        dataAbouts.append("images[]", sts);
      }
    }

    if (isCountToChange.value == 1 && ImageAbouts.length == 1) {
      dataAbouts.append("image_1", ImageAbouts[0]);
    } else if (isCountToChange.value == 2 && ImageAbouts.length == 1) {
      dataAbouts.append("image_2", ImageAbouts[0]);
    }

    //  handleSaveCardGeneral(fields,  [state.content],  isImage)

    //  const { error } = validateAbouts(dataAbouts);
    //  console.log(error?.details);

    //  if (error) {
    //    toast({
    //      title: `${error.details[0].path[0]}`,
    //      description: `${error.details[0].message}`,
    //      variant: "destructive",
    //    });
    //  }
    //  return;

    const { data } = await axios.post(URL_RESQUESTS.INDEX_UPDATE, dataAbouts);
    if (data) {
      useCompagnyStore().state.data = data.company;
      ImageAbouts = [];
      toast({
        title: `Modification enregistré`,
        description: "Modifié avec succès",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="scss" scoped></style>
