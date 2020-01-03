import React from 'react';

class SearchBar extends React.Component {
	state = {
		myInput: ''
	}

	onInputChange = (event) => {
		this.setState({ myInput: event.target.value })
	}

	render() {
		return (
			<div className='search-bar ui segment'>
				<form className='ui form'>
					<div className='field'>
						<label>Video Search</label>
						<input 
							type='text'
							value={this.state.myInput}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;