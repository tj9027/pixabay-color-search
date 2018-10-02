import React, { Component } from 'react';
import ColouredBox from './ColouredBox';
import ImageList from './ImageList';

export default class AppBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      colors: ['red', 'yellow', 'green', 'purple'],
      keywords: ['man', 'mountain', 'state', 'ocean', 'country', 'building', 'cat', 'airline', 'wealth', 'happiness', 'pride', 'fear', 'religion', 'bird', 'book', 'phone', 'rice', 'snow', 'water']
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(color) {
    const random = Math.floor(Math.random() * this.state.keywords.length);
    fetch(`https://pixabay.com/api/?key=10267704-bfb21886ef6e90742679b97fe&q=${color}+${this.state.keywords[random]}&per_page=5&image_type=photo&pretty=true`)
      .then(results => results.json())
      .then(json => {
        alert(JSON.toString(json));
        this.setState({
          res: json.hits
        });
      })
      .catch((error) => { alert('parsing failed', error); });
  }

  render() {
    const { colors, res } = this.state;
    return (
      <div>
        <div className="buttonsContainer">{
          colors.map(color => (
            <ColouredBox
              className='buttonsContainer__box'
              key={color}
              onClick={this.handleOnClick}
              color={color} />)
          )
        }
        </div>
        {
          res.length > 0 ?
            <ImageList
              images={res}
            /> :
            <p> no results found</p>
        }
      </div >
    )
  }
}
