import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { trpc } from '@/utils/trpc'

const About: NextPage = () => {
	const { data } = trpc.useQuery(['stash.hello'])

	return (
		<div>
			<h1>About</h1>
			<h2 className="text-3xl">{data?.text}</h2>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
	const sendRedirectLocation = (location: string) => {
		res.writeHead(302, {
			Location: location
		})
		res.end()
		return { props: {} } // stop execution
	}

	// some auth logic here
	const session = await getSession({ req })

	if (!session) {
		sendRedirectLocation('/sign_up')
	}

	return {
		props: {} // will be passed to the page component as props
	}
}

export default About
