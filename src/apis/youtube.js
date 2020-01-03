import axios from 'axios';

const KEY = 'AIzaSyAGksrZf7tMUoIMQ_RaWVYioPGXwZdvW4w';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		type: `${KEY}`
	}
});

