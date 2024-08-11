import React from 'react';
import { Link } from 'react-router-dom';

const ButtonList = () => {
	const ButtonList = [
		'All',
		'Gaming',
		'Live',
		'Namaste JavaScript',
		'IPL',
		'Akshay Saini',
		'Music',
		'Sports',
		'Virat Kohli',
		'Comedy',
		'React',
		'Code with Harry',
		'Music',
		'Sports',
	];
	return (
		<div>
			<ul className="flex  ">
				{ButtonList.map((button, index) => {
					return (
						<Link key={index}>
							<li className="border border-gray-400 text-white bg-slate-600 rounded-lg px-3 mx-2 cursor-pointer">
								{button}
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default ButtonList;
