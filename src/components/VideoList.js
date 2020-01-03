import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
	const renderedLists = videos.map(clip => {
		return(
			<VideoItem clip={ clip }/>
		)
	});
	return <div className='ui relaxed divided list'>{renderedLists}</div>
}

export default VideoList;