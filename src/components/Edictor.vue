<template>
  <!-- Tiptap -->
  <div class="border border-gray-200 rounded-xl overflow-hidden">
    <div id="hs-editor-tiptap">
      <div class="flex align-middle gap-x-0.5 border-b border-gray-200 p-2">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          class="blod size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          type="button"
        >
          <i class="ri-bold text-lg font-light"></i>
        </button>
        <button
          class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          type="button"
          @click="editor.chain().focus().setItalic().run()"
        >
          <i class="ri-italic text-lg font-light"></i>
        </button>
        <button
          class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          type="button"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <i class="ri-underline text-lg font-light"></i>
        </button>
        <button
          class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          type="button"
          @click="editor.chain().focus().toggleStrike().run()"
          data-hs-editor-strike=""
        >
          <i class="ri-strikethrough text-lg font-light"></i>
        </button>

        <button
          class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          type="button"
          @click="editor.chain().focus().toggleOrderedList().run()"
          data-hs-editor-ol=""
        >
          <i class="ri-list-ordered text-lg font-light"></i>
        </button>

        <button type="button" class="flex" :disabled="loadingMedia">
          <label
            for="AddImageBlog"
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            type="button"
          >
            <SpinnerLoading size="h-4  fill-black" v-if="loadingMedia" />
            <i
              class="ri-image-2-line text-lg font-light whitespace-break-spaces"
              v-else
            ></i>
          </label>
          <input @change="addImage" class="hidden" type="file" id="AddImageBlog" />
        </button>
      </div>

      <div class="h-[10rem] overflow-auto p-4" data-hs-editor-field="">
        <editor-content :editor="editor" class="whitespace-break-spaces" />
      </div>
    </div>
  </div>
  <!-- End Tiptap -->
</template>

<script>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
// Tiptap
import Placeholder from "https://esm.sh/@tiptap/extension-placeholder";
import Paragraph from "https://esm.sh/@tiptap/extension-paragraph";
import Bold from "https://esm.sh/@tiptap/extension-bold";
import Underline from "https://esm.sh/@tiptap/extension-underline";
import Link from "https://esm.sh/@tiptap/extension-link";
import BulletList from "https://esm.sh/@tiptap/extension-bullet-list";
import OrderedList from "https://esm.sh/@tiptap/extension-ordered-list";
import ListItem from "https://esm.sh/@tiptap/extension-list-item";
import Blockquote from "https://esm.sh/@tiptap/extension-blockquote";
import Image from "https://esm.sh/@tiptap/extension-image";
import { URL_RESQUESTS } from "@/api_urls";
import axios from "axios";
import SpinnerLoading from "./loadings/spinner.loading.vue";

export default {
  components: {
    EditorContent,
    SpinnerLoading,
  },

  emits: ["update:modelValue"],

  data() {
    return {
      editor: null,
      actions: [],
      loadingMedia: false,
    };
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Placeholder.configure({
          placeholder: "Add a message, if you'd like.",
          emptyNodeClass: "text-gray-800 dark:text-neutral-200",
        }),
        StarterKit,
        Image,
        Paragraph.configure({
          HTMLAttributes: {
            class: "text-gray-800 dark:text-neutral-200",
          },
        }),
        Bold.configure({
          HTMLAttributes: {
            class: "font-bold",
          },
        }),
        Underline,
        Link.configure({
          HTMLAttributes: {
            class:
              "inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-white",
          },
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: "list-disc list-inside text-gray-800 dark:text-white",
          },
        }),
        OrderedList.configure({
          HTMLAttributes: {
            class: "list-decimal list-inside text-gray-800 dark:text-white",
          },
        }),
        ListItem,
        Blockquote.configure({
          HTMLAttributes: {
            class: "text-gray-800 sm:text-xl dark:text-white",
          },
        }),
      ],

      content: "",
      onUpdate: () => {
        // HTML
        this.editor?.value?.commands.setContent("<p>Hi Mars</p>");
        this.$emit("update:modelValue", this.editor.getHTML());

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    });
  },
  methods: {
    async addImage(e) {
      try {
        this.loadingMedia = true;
        const DATA = new FormData();
        console.log(e.target.files);
        DATA.append("original_url[]", e.target.files[0]);

        const { data } = await axios.post(URL_RESQUESTS.BLOG_MEDIA_CREATED, DATA);

        if (data) {
          this.editor
            .chain()
            .focus()
            .setImage({ src: data?.blog_media.original_url })
            .run();
          this.loadingMedia = false;
        }
      } catch (error) {
        this.loadingMedia = false;
      }
    },
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style>
.ProseMirror:focus {
  outline: none;
}

.tiptap ul p,
.tiptap ol p {
  display: inline;
}

.tiptap p.is-editor-empty:first-child::before {
  font-size: 14px;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
