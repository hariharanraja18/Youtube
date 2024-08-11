import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from './utils/AppSlice';
import { YOUTUBE_SUGGEST_API } from './utils/constants/YoutubeApi';
import { CacheResults } from './utils/SearchSlice';

const Head = () => {
	const dispatch = useDispatch();
	const [SearchQuery, setSearchQuery] = useState('');
	const [suggestions, setSuggestion] = useState([]);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const searchCache = useSelector((Store) => Store.search);
	useEffect(() => {
		const Timer = setTimeout(() => {
			if (searchCache[SearchQuery]) {
				setSuggestion(searchCache[SearchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(Timer);
		};
	}, [SearchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SUGGEST_API + SearchQuery);
		const json = await data.json();
		setSuggestion(json[1]);
		dispatch(
			CacheResults({
				[SearchQuery]: json[1],
			})
		);
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

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
			<div className="col-span-10">
				<div className="flex items-center justify-center relative">
					<input
						className="border border-gray-400 rounded-l-full py-1 px-2 my-3 w-[600px] "
						placeholder="Search"
						type="text"
						value={SearchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestion(true)}
						onBlur={() => setShowSuggestion(false)}
					/>
					<button
						className="border border-gray-400 rounded-r-full py-1 px-2 my-3 justify-center "
						type="button">
						🔍
					</button>
				</div>
				{showSuggestion && (
					<div className="flex items-center justify-start left-[540px] top-[46px] bg-white rounded-b-lg w-[600px] m-auto absolute">
						<ul>
							{suggestions?.map((info) => (
								<button key={info} className="p-1 my-1 cursor-pointer flex flex-col" onClick={()=> console.log("clicked")}>
									🔍 {info}
								</button>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1 flex justify-end ">
				<img
					className="w-10 h-10 my-1 p-1 "
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
					alt="User-icon"
				/>
			</div>
		</div>
	);
};

export default Head;
