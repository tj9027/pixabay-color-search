import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: []
    }
  }

  componentWillMount() {
    fetch('https://pixabay.com/api/?key=10267704-bfb21886ef6e90742679b97fe&q=yellow+flowers&image_type=photo&pretty=true')
      .then(results => results.json())
      .then(json => {
        this.setState({ res: json.hits });
      });
  }

  render() {
    const images = this.state;
    return (
      <div>
        {images.res && images.res.map(image =>
          <img src={image.previewURL} alt={image.tags} key={image.id} />
        )
        }
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('main'));
