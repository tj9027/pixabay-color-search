import React from 'react';

const ImageList = (props) => (
  <div className='imagesListContainer'
  >
    {props.images.map(image =>
      <a
        href={image.pageURL}
        target='__blank'
        key={image.id}
      >
        <img
          src={image.previewURL}
          alt={image.tags}
        />
      </a>
    )}
  </div>
);

export default ImageList;