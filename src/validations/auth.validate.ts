import { z } from "zod"

export const AuthSignUpValidate = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email({ message: 'Entrez un email valide' }),
  password: z.string().min(3).max(50),
  
  name: z.string().min(2).max(50),
  logo: z.any() 
})

export const AuthSignInValidate = z.object({
  email: z.string().email({ message: 'Entrez un email valide' }),
  password: z.string().min(3).max(50)
})
