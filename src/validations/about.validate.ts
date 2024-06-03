import * as Joi from 'joi';

export const validateAbouts = (req: object) => {
   const schema = Joi.object({
    //   logo: Joi.array().required(),
      stats_1: Joi.string().required(),
      stats_2: Joi.string().required(),
      stats_3: Joi.string().required(),
      stats_4: Joi.string().required(),
      description: Joi.string().required(),
   });
   return schema.validate(req);
};
