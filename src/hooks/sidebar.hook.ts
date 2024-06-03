import { reactive } from 'vue';

export const useSideBar = () => {
   const stateSideBar = reactive({
      menu: [
         {
            name: 'Generale',
            route: 'HOME',
            actived: true,
         },
         
         // {
         //    name: 'Headers',
         //    route: 'HEADERS',
         //    actived: false,
         // },
         {
            name: 'Bannières',
            route: 'BANNERS',
            actived: false,
         },
         {
            name: 'A propos',
            route: 'ABOUTS',
            actived: false,
         },
         {
            name: 'Contacts',
            route: 'CONTACTS',
            actived: false,
         },
         {
            name: 'Partenaires',
            route: 'PARTNER',
            actived: false,
         },
         {
            name: 'Teams',
            route: 'TEAMS',
            actived: false,
         },
         {
            name: 'Past Presidents',
            route: 'PASTS_PRESIDENTS',
            actived: false,
         },
         {
            name: 'Portfolio',
            route: 'PORTFOLIO',
            actived: false,
         },
         // {
         //    name: 'Newsletters',
         //    route: 'CONTACTS',
         //    actived: false,
         // },
         {
            name: 'blogs',
            route: 'BLOGS',
            actived: false,
         },
      
      ],
   });

   return {
      stateSideBar,
   };
};
