import * as trpc from '@trpc/server'
import { z } from 'zod'
import type { AuthenticatedTrpcRouterContextType } from '@/server/utils/context'
import { stashRouter } from './stash'

export const appRouter = trpc.router<AuthenticatedTrpcRouterContextType>().merge('stash.', stashRouter)

// export type definition of API
export type AppRouter = typeof appRouter
