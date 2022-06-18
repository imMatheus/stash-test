import { z } from 'zod'
import { createProtectedRouter } from '@/server/utils/create-protected-router'

export const stashRouter = createProtectedRouter().query('hello', {
	input: z.object({
		text: z.string()
	}),
	resolve: ({ input }) => {
		return {
			text: `Stashing ${input.text}`
		}
	}
})
