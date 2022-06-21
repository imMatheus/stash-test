import Link from 'next/link'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

const Navbar: React.FC = ({}) => {
	const { data: session } = useSession()

	return (
		<nav className="py-2 px-4">
			<div className="container mx-auto flex items-center justify-between">
				<h2 className="text-4xl font-black tracking-wide">Stash</h2>
				<div className="flex items-center">
					<Link href="/stashes" passHref>
						<a className="cursor-pointer rounded px-2 py-0.5 transition-colors hover:bg-gray-100">
							Stashes
						</a>
					</Link>
					<Link href="/about" passHref>
						<a className="cursor-pointer rounded px-2 py-0.5 transition-colors hover:bg-gray-100">About</a>
					</Link>
					<Link href="/sign_up" passHref>
						<a className="cursor-pointer rounded px-2 py-0.5 transition-colors hover:bg-gray-100">
							Sign Up
						</a>
					</Link>

					<div
						className="cursor-pointer rounded px-2 py-0.5 transition-colors hover:bg-gray-100"
						onClick={() => signOut()}
					>
						Logout
					</div>

					<Link href="/me" passHref>
						<a className="relative block h-10 w-10 cursor-pointer lg:h-12 lg:w-12">
							<Image
								src={session?.user?.image || 'https://avatars.githubusercontent.com/u/22?v=4'}
								layout="fill"
								alt={`${session?.user?.name} profile image`}
								className="rounded-full"
							/>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
