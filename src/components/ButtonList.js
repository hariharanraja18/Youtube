import React from 'react'
import { Link } from 'react-router-dom';

const ButtonList = () => {
  const ButtonList = [
		'All',
		'Music',
		
		'JavaScript',
		'HTML',
		'TailwindCss',
		'React',
		'All',
		'Music',
		
		'JavaScript',
		'HTML',
		'TailwindCss',
		'React',
	];
  return (
		<div>
			<ul className="flex">
				{ButtonList.map((button) => {
					return (
						<Link>
							<li className="border border-gray-400 text-white bg-gray-400 rounded-lg px-3 mx-2 cursor-pointer">
								{button}
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default ButtonList
