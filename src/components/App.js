import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetail';

class App extends React.Component {
	state={
		videos: [],
		selectedVideo: null
	}

	componentDidMount() {
		this.onInputSubmit('cars');
	}

	onInputSubmit = async myInput => {
		const response = await youtube.get('/search', {
			q: myInput
		});

		console.log(response.data.items);
		this.setState({ 
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}

	onVideoSelect = clip => {
		this.setState({ selectedVideo: clip })
	}

	render() {
		return(
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onInputSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetails video={this.state.selectedVideo}/>
						</div>
						<div className='five wide column'>
							<VideoList 
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;