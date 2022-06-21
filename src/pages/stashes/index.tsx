import React from 'react'
import type { NextPage } from 'next'
import Button from '@/components/button'

const Stashes: NextPage = () => {
	return (
		<div className="py-2">
			<div className="container mx-auto">
				<h2 className="text-xl font-bold">Your stashes</h2>
				<div className="flex gap-2">
					<Button>Create a stash</Button>
					<Button>Join a stash</Button>
				</div>
			</div>
		</div>
	)
}

export default Stashes
