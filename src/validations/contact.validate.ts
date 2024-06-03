import  * as Joi  from 'joi';

export const validateContact = (req:object) => {
    const schema = Joi.object({
        id: Joi.allow(),
        title: Joi.string().min(3).required(),
        content: Joi.string().min(3).required(),
        original_url: Joi.allow(),
     });
     return schema.validate(req);
  }


  export const validateCreatePartner = (req:object) => {
    const schema = Joi.object({
        id: Joi.allow(),
        title: Joi.string().min(2).required(),
        content: Joi.allow(),
        original_url: Joi.object().required(),
     });
     return schema.validate(req);
  }

  export const validateUpdatePartner = (req:object) => {
    const schema = Joi.object({
        id: Joi.allow(),
        title: Joi.string().min(2).required(),
        content: Joi.allow(),
        original_url: Joi.allow(),
     });
     return schema.validate(req);
  }



