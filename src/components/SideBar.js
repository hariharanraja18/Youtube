import React from 'react'
import MenuItems from './MenuItems'

const SideBar = () => {
  return (
		<div className="grid-cols-1 m-1 p-1">
			<ul>
				<li className="mx-2 my-5">Home</li>
				<li className="mx-2 my-5">Shorts</li>
				<li className="mx-2 my-5">Subscriptions</li>
				<li className="mx-2 my-5">You</li>
			</ul>
			<MenuItems />
		</div>
	);
}

export default SideBar
