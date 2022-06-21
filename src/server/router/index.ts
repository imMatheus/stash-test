import * as trpc from '@trpc/server'
import type { AuthenticatedTrpcRouterContextType } from '@/server/utils/context'
import { stashRouter } from './stash'
import { z } from 'zod'
import prisma from '../utils/prisma'

export const appRouter = trpc.router<AuthenticatedTrpcRouterContextType>().mutation('cast-review', {
	input: z.object({
		comment: z.string(),
		rating: z.number()
	}),
	async resolve({ input }) {
		const { comment, rating } = input
		const review = await prisma.review.create({
			data: {
				comment,
				rating
			}
		})
		return review
	}
}) //.merge('stash.', stashRouter)

// export type definition of API
export type AppRouter = typeof appRouter
