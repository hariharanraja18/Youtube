import React from 'react';

const CommentsData = [
	{
		name: 'Hariharan',
		text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
		replies: [],
	},
	{
		name: 'Hariharan',
		text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
		replies: [],
	},
	{
		name: 'Hariharan',
		text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
		replies: [
			{
				name: 'Hariharan',
				text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
				replies: [],
			},
			{
				name: 'Hariharan',
				text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
				replies: [
					{
						name: 'Hariharan',
						text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
						replies: [
							{
								name: 'Hariharan',
								text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: 'Hariharan',
		text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
		replies: [
			{
				name: 'Hariharan',
				text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
				replies: [],
			},
		],
	},
	{
		name: 'Hariharan',
		text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic possimus voluptatibus suscipit quos saepe.',
		replies: [],
	},
];

const Comment = ({ data }) => {
	const { name, text} = data;
	return (
		<div className="flex shadow bg-gray-100 rounded">
			<img
				className="w-16 h-16 my-1 p-1 "
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
				alt="User-icon"
			/>
			<div className="px-1 my-3 ">
				<p className="font-bold">{name}</p>
				<p className="">{text}</p>
			</div>
		</div>
	);
};

const CommentList = ({ comments }) => {
	return comments.map((comment, index) => {
		return (
			<div key={index}>
				<Comment data={comment} />
				<div className='pl-5 border border-l-black ml-5'>
					<CommentList comments={comment.replies}/>
				</div>
			</div>
		);
	});
};

const CommentsContainer = () => {
	return (
		<div className='w-[1200px]'>
			<h1 className=" p-1 font-bold">Comments:</h1>
			<CommentList comments={CommentsData} />
		</div>
	);
};

export default CommentsContainer;
