import { z } from "zod"

export const schema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional()
})

export type UpdateContactData = z.infer<typeof schema>