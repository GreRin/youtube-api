import React from 'react';

const VideoItem = ({ clip }) => {

return(
	<div className='item'>
		<img src={clip.snippet.thumbnails.medium.url} alt='' />
		<p>{clip.snippet.title}</p>
	</div>
)
}

export default VideoItem;