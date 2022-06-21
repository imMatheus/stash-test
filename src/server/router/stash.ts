import { z } from 'zod'
import { createProtectedRouter } from '@/server/utils/create-protected-router'

export const stashRouter = createProtectedRouter().query('hello', {
	resolve: ({ ctx }) => {
		console.log('hello from stash route')
		console.log(ctx)

		return {
			text: `Hello from stash`
		}
	}
})
