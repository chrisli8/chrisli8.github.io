'use strict';

const e = React.createElement;

class UnitProfiles extends React.Component {
	constuctor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		if (this.state.liked) {
	      return 'You liked this.';
	    }
		
		return e(
			'button',
		     { onClick: () => this.setState({ liked: true }) },
		     'Like'
		);
	}

}

const domContainer = document.querySelector('#unit_profiles_container');
ReactDOM.render(e(UnitProfiles), domContainer);