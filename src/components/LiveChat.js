import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from './utils/ChatSlice';
import { Comments } from './utils/constants/YoutubeApi';

const LiveChat = () => {
	const [liveChatInput, setliveChatInput] = useState('');
	const dispatch = useDispatch();
	const chatMessages = useSelector((Store) => Store.chat.messages);
	useEffect(() => {
		const i = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * 20);
			dispatch(
				addMessages({
					name: Comments[randomNumber].name,
					message: Comments[randomNumber].message,
				})
			);
		}, 1500);
		return () => clearInterval(i);
	}, []);
	return (
		<div className="px-1">
			<div>
				{chatMessages.map(({ name, message }, i) => {
					return <ChatMessage key={i} name={name} message={message} />;
				})}
			</div>
			<form
				className="flex border border-black "
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addMessages({
							name: 'hari',
							message: liveChatInput,
						})
					);
					setliveChatInput("");
				}}>
				<input
					className="border border-black m-1 p-1 w-9/12"
					type="text"
					value={liveChatInput}
					onChange={(e) => setliveChatInput(e.target.value)}
				/>
				<button className="border border-black m-1 p-1 w-3/12 bg-gray-300">
					Send
				</button>
			</form>
		</div>
	);
};

export default LiveChat;
