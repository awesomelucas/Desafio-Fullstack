import { z } from "zod"

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string()

})

export type RegisterData = z.infer<typeof contactSchema>