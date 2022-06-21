import React from 'react'
import type { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'
import Button from '@/components/button'

const SignUp: NextPage = () => {
	const { data: session } = useSession()

	console.log('session', session)
	return (
		<div>
			<h2 className="text-center text-5xl font-bold">Welcome to Stash</h2>
			<Button onClick={() => signIn('github')}>Sign in</Button>
		</div>
	)
}

export default SignUp
