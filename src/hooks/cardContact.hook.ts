import { reactive } from 'vue';

export const useCardContact = () => {
   const stateCardContacts = reactive({
      contacts: [
         {
            icon: 'ri-phone-fill',
            color: 'bg-blue-700',
            name: 'Telephone',
            fields: ['contact_phone']
         },
         {
            icon: 'ri-mail-star-fill',
            color: 'bg-cyan-500',
            name: 'Email',
            fields: ['contact_mail']
         },
         {
            icon: 'ri-whatsapp-fill',
            color: 'bg-green-500',
            name: 'WhatsApp',
            fields: ['contact_whatsapp']
         },
         {
            icon: 'ri-facebook-circle-fill',
            color: 'bg-blue-700',
            name: 'Facebook',
            fields: ['contact_facebook']
         },
         {
            icon: 'ri-instagram-fill',
            color: 'bg-pink-700',
            name: 'Instagram',
            fields: ['contact_instagram']
         },
         {
            icon: 'ri-linkedin-box-fill',
            color: 'bg-blue-600',
            name: 'Linkedin',
            fields: ['contact_linkedin']
         },
         {
             icon: 'ri-twitter-x-fill',
             color: 'bg-black',
             name: 'Twitter (X)',
             fields: ['contact_x']
          },
      ],
      mediaSociaux: [
        
     ],
   });

   return {
      stateCardContacts,
   };
};
