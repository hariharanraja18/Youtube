import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { YOUTUBE_API } from './utils/constants/YoutubeApi'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos,SetVideos]=useState([])
  useEffect(()=>{
      fetchData();
  },[])
  const fetchData = async () => {
		const data = await fetch(YOUTUBE_API);
		const json = await data.json();
		console.log(json?.items);
		SetVideos(json?.items);
  
	};
  return (
		<div className="flex flex-wrap gap-x-3 gap-y-5">
			{videos.map((video) => {
				return <Link to={"/watch?v="+video.id}><Videocard key={video.id} info={video} /></Link>;
			})}
		</div>
	);
}

export default VideoContainer
