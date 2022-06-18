import { appRouter, AppRouter } from '@/server/router'
import { inferProcedureOutput } from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { createAuthenticatedTrpcContext } from '@/server/utils/context'

// export API handler
export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: createAuthenticatedTrpcContext
})

export type inferQueryResponse<TRouteKey extends keyof AppRouter['_def']['queries']> = inferProcedureOutput<
	AppRouter['_def']['queries'][TRouteKey]
>
