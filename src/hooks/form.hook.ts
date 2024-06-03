/**
 * Clear Value Form
 * @param {object} Inputs
 * @param {string} prefix
 * @returns {object}
 */
export const useClearInputForm = async(Inputs: object, prefix: string) => {
   let INPUTS_VALUES = Object.keys(Inputs);
   let ClearInputValue: any = {}

   INPUTS_VALUES = INPUTS_VALUES.map((el) => {
    ClearInputValue[el] = ''
      return `${prefix}${el}`;
   });

   INPUTS_VALUES.forEach((IdInput: string) => {
      let GetInputAll: any;
      GetInputAll = document.querySelector(`#${IdInput}`);
      GetInputAll.value = '';
   });

   return {ClearInputValue};
};
