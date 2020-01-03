import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedLists = videos.map(clip => {
		return(
			<VideoItem 
				key={clip.id.videoId}
				onVideoSelect={onVideoSelect} 
				clip={ clip }
			/>
		)
	});
	return <div className='ui relaxed divided list'>{renderedLists}</div>
}

export default VideoList;