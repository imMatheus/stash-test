import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = ({}) => {
	return (
		<nav className="py-2 px-4">
			<div className="container mx-auto flex items-center justify-between">
				<h2 className="text-4xl font-black tracking-wide">Stash</h2>
				<div className="flex">
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
				</div>
			</div>
		</nav>
	)
}

export default Navbar
