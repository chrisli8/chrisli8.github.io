'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <div class = "portraitElement">
        <div class = "portraitDiv">
          <img class="portrait" src="images/hcc/covenant/infantry/Grunt_Minor.png" title="Grunt Minor" />
          <p> Portrait </p>
        </div>
        <div class = "contentDiv">
          <p> Content </p>
        </div>
      </div>
    );
  }
}

let domContainer = document.querySelector('#unit_profile_container');
ReactDOM.render(<LikeButton />, domContainer);