import React from 'react';
import { useSelector } from 'react-redux';

const Videocard = ({ info }) => {
	const isMenuOpen =useSelector((Store)=> Store.app.isMenuOpen);
	const cardWidth = isMenuOpen ? 'w-[430px]' : 'w-[360px]';
	return (
		<div className={`mx-1 p-1 shadow-lg my-2 h-[330px] ${cardWidth}`}>
			<ul>
				<li>
					<img
						className="rounded-lg hover:rounded-none w-full"
						src={info?.snippet?.thumbnails?.medium?.url}
						alt="Thumbnails"
					/>
				</li>
				<li className="font-bold my-1">{info?.snippet?.title}</li>
				<li className="font-normal text-sm">{info?.snippet?.channelTitle}</li>
				<li className="font-normal text-sm">
					{info?.statistics?.viewCount} views
				</li>
			</ul>
		</div>
	);};

export default Videocard;
