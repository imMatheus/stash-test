import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc'
import { useState } from 'react'

const Home: NextPage = () => {
	const mut = trpc.useMutation(['cast-review'])
	const [first, setFirst] = useState('')
	const [secund, setSecund] = useState(0)

	return (
		<div className="bg-red-500">
			<input
				className="m-2 rounded bg-blue-500 p-2"
				type="text"
				value={first}
				onChange={(e) => setFirst(e.target.value)}
			/>
			<input
				className="m-2 rounded bg-blue-500 p-2"
				type="number"
				value={secund}
				onChange={(e) => setSecund(parseInt(e.target.value))}
			/>
			<button
				onClick={() => {
					mut.mutate({ comment: first, rating: secund })
				}}
			>
				send
			</button>
		</div>
	)
}

export default Home
