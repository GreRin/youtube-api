import React from 'react';
import './VideoItem.css';

const VideoItem = ({ clip, onVideoSelect }) => {

return(
	<div onClick={() => onVideoSelect(clip)} className='video-item item'>
		<img className='ui image' 
			alt={clip.snippet.title} 
			src={clip.snippet.thumbnails.medium.url} 
		/>
		<div className='content'>
			<div className='header'>{clip.snippet.title}</div>
		</div>
	</div>
)
}

export default VideoItem;