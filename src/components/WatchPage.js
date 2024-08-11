import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	return (
		<div className="m-2 p-2">
			<div className="flex">
				<div className="w-9/12">
					<iframe
						width="1000"
						height="600"
						src={'https://www.youtube.com/embed/' + searchParams.get('v')}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen></iframe>
				</div>

				<div className="mx-1 px-1 border border-black w-full bg-slate-100 rounded-lg shadow-lg h-[600px] overflow-scroll flex flex-col-reverse">
					<LiveChat />
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;
