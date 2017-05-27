import React from 'react';
import { Link } from 'react-router';
import react from 'react-transition-group';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const Photo = ({ post, comments, idx, increment }) => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`view/${post.code}`}>
        <img src={post.display_src} alt={post.caption} className="grid-photo"/>
      </Link>
      <CSSTransitionGroup
          transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
        <span key={post.likes} className="likes-heart">{post.likes}</span>
      </CSSTransitionGroup>
    </div>
    <figcaption>
      <p>{post.caption}</p>
      <div className="control-buttons">
        <button className="likes" onClick={() => increment(idx)}>&hearts; {post.likes}</button>
        <Link to={`view/${post.code}`} className="button">
          <span className="comment-count">
            <span className="speech-bubble"></span>
            {comments[post.code] ? comments[post.code].length : 0 }
          </span>
        </Link>
      </div>
    </figcaption>
  </figure>
);

export default Photo;
