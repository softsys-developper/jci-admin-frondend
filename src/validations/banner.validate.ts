import  * as Joi  from 'joi';

export const validateBanner = (req:object) => {
    const schema = Joi.object({
      original_url: Joi.object().required(),
        id: Joi.allow(),
        title: Joi.string().min(10).required(),
        content: Joi.string().min(10).required(),
     });
     return schema.validate(req);
  }

  export const validateBannerUpdate = (req:object) => {
    const schema = Joi.object({
        id: Joi.allow(),
        original_url: Joi.allow(),
        title: Joi.string().min(5).required(),
        content: Joi.string().min(5).required(),
     });
     return schema.validate(req);
  }


