import React from 'react';

const Videocard = ({ info }) => {

	return (
		<div className="mx-1 p-1 shadow-lg w-[330px] my-2 h-auto">
			<ul>
				<li>
					<img
						className="rounded-lg hover:rounded-none"
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
	);
};

export default Videocard;
