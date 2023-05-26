import { z } from "zod"

export const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string()
})

export type CreateContactData = z.infer<typeof schema>