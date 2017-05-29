import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const { postId } = props.params; // Directly destructure postId from params
  const idx = props.posts.findIndex((post) => post.code === postId);
  const post = props.posts[idx];
  const postComments = props.comments[postId] || [];
  return (
    <div className="single-photo">
      <Photo idx={idx} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
};

export default Single;
