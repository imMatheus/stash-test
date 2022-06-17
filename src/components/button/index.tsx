import React from 'react'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'white' | 'black'
}

const Button: React.FC<ButtonProps> = ({ variant = 'black', children, ...props }) => {
	return (
		<button
			{...props}
			className={classNames(
				'rounded py-1.5 px-4 transition-opacity hover:opacity-80',
				{
					'bg-black text-white': variant === 'black'
				},
				props.className
			)}
		>
			{children}
		</button>
	)
}

export default Button
