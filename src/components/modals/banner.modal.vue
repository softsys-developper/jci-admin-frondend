<script setup>
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AllService } from "@/services/index.services";
import { URL_RESQUESTS } from "@/api_urls";
import { onActivated, ref, computed } from "vue";
import { useCreated } from "@/hooks/created.hook";
import { useUpdated } from "@/hooks/updated.hook";
import SpinnerLoading from "../loadings/spinner.loading.vue";
import Edictor from "@/components/Edictor.vue";

const props = defineProps([
  "title",
  "isUpdated",
  "dataUpdated",
  "ID",
  "type",
  "labels",
  "multiple",
]);

const { state, loading, ImagePreview, CREATED } = useCreated();
const { state: stateUpdate, UPDATED } = useUpdated();
const isAllreadyUse = ref(false);

const Update__Fun = computed(() => {
  if (!isAllreadyUse.value && props.isUpdated) {
    state.value.content =
      props.dataUpdated?.content ||
      props.dataUpdated?.date ||
      props.dataUpdated?.description;
    state.value.title = props.dataUpdated?.title || props.dataUpdated?.name;
    ImagePreview.value =
      props.dataUpdated?.original_url == null
        ? []
        : [props.dataUpdated?.original_url] || props.dataUpdated?.medias;

    isAllreadyUse.value = false;
  }
});

const onChangeImage = (e) => {
  state.value.original_url = e.target.files;
  const file = e.target.files;
  let files = [];

  for (let i = 0; i < e.target.files.length; i++) {
    const file = e.target.files[i];
    files.push(file);
  }
  ImagePreview.value = [];

  files.forEach((el) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      ImagePreview.value?.push(e.target.result);
    };
    reader.readAsDataURL(el);
  });
};
</script>

<template>
  {{ Update__Fun }}
  <Dialog>
    <DialogTrigger as-child>
      <Button v-if="!isUpdated" :variant="isUpdated ? 'none' : 'default'">
        {{ title }}
      </Button>
      <div class="" v-else>
        <slot name="isIcon" />
      </div>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle> {{ title }} </DialogTitle>
        <DialogDescription>
          Ajouter de nouveaux elements de contenu a votre site web, pour plus
          d'actractivité.
        </DialogDescription>
      </DialogHeader>
      <form
        class="grid gap-4 py-4"
        @submit.prevent="CREATED(type, !isUpdated ? true : false, ID)"
      >
        <div class="w-full grid grid-cols-6" v-if="ImagePreview?.length != 0">
          <div v-for="IM in ImagePreview" class="size-14">
            <img class="object-cover size-14" :src="IM" alt="" />
          </div>
        </div>

        <div class="" v-if="typeof state.original_url[0] == string">
          <img class="h-32 object-contain" :src="state.original_url" alt="" />
        </div>

        <div class="flex flex-col gap-1">
          <Label
            for="created_media"
            class="flex justify-center items-center uppercase text-xs font-black border-dashed h-16 border-[1px]"
          >
            {{
              multiple
                ? "Cliquez Ici, Ajoutez des images"
                : type == "Blogs"
                ? labels[0]
                : " Cliquez Ici, Ajoutez une image"
            }}
          </Label>

          <Input
            :multiple="multiple ? true : false"
            type="file"
            class="col-span-3 hidden"
            id="created_media"
            @change="onChangeImage"
          />
        </div>

        <div class="flex flex-col gap-1">
          <Label for="name" class="uppercase text-xs font-black">
            {{ labels ? labels[1] : "Title" }}
          </Label>
          <Input
            class=""
            id="created_title"
            v-model="state.title"
            placeholder="Ex: Softsys"
          />
        </div>

        <div class="flex flex-col gap-1">
          <Label for="username" class="uppercase text-xs font-black"> Description </Label>
          <Textarea
            v-if="type != 'Blogs'"
            placeholder="Type your message here."
            id="created_description"
            v-model="state.content"
          />

          <Edictor @update:modelValue="(e) => (state.content = e)" v-else />
        </div>

        <DialogFooter>
          <Button type="submit" :disabled="loading">
            <span v-if="!loading">{{ isUpdated ? "Modifier" : "Ajouter" }}</span>
            <SpinnerLoading v-else />
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
