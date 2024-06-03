import axios from 'axios';


export const authentificateApp = async (TOKEN?:any) => {
   // Verify is Token exist
   const nToken = localStorage.getItem('nToken');
   TOKEN =   TOKEN ? TOKEN : nToken;

   console.log(TOKEN, nToken)

   if (TOKEN) {
      axios.defaults.headers.common['authorization'] = 'Bearer ' + TOKEN;
   }

   return {TOKEN}
};
