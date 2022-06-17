import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc'

const Home: NextPage = () => {
	const res = trpc.useQuery(['hello', { text: 'Elon Musk' }])

	return <div className="bg-red-500">{res.data?.text}</div>
}

export default Home
