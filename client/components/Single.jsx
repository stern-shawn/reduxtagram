import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const idx = props.posts.findIndex((post) => post.code === props.params.postId);
  const post = props.posts[idx];
  return (
    <div className="single-photo">
      <Photo idx={idx} post={post} {...props} />
      <Comments />
    </div>
  );
};

export default Single;
