import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';

const PhotoGrid = (props) => (
  <div className="photo-grid">
    {props.posts.map((post, idx) => <Photo key={idx} idx={idx} {...props} post={post}/>)}
  </div>
);

export default PhotoGrid;
