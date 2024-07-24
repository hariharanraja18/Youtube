import React from 'react'

import { useDispatch } from 'react-redux';

import { toggleMenu } from './utils/AppSlice';

const Head = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler=()=>{
		dispatch(toggleMenu())
	}
  return (
		<div className="grid grid-flow-col">
			<div className="col-span-1 flex">
				<img
					className="w-12 h-12 m-1 p-1 cursor-pointer"
					onClick={toggleMenuHandler}
					src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
					alt="HamburgerMenuIcon"
				/>
				<img
					className="w-40 h-10 m-2 p-1"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
					alt="Youtube-logo"
				/>
			</div>
			<div className="col-span-10 ml-[200px]">
				<input
					className="border border-gray-400 rounded-l-full py-1 px-2 my-3 w-[600px]"
          placeholder='Search'
					type="text"
				/>
				<button
					className="border border-gray-400 rounded-r-full py-1 px-2 my-3 "
					type="button">
					🔍
				</button>
			</div>
			<div className="col-span-1">
				<img
					className="w-10 h-10 my-1 ml-[300px] p-1 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
					alt="User-icon"
				/>
			</div>
		</div>
	);
}

export default Head
