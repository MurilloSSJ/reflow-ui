import * as zod from 'zod'

export const loginSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
})
export type loginTypeSchema = zod.infer<typeof loginSchema>