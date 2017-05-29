const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return state.map((post, idx) => idx === action.index ? // eslint-disable-line no-confusing-arrow, max-len
        // Increment likes of the matching post
        { ...post, likes: post.likes + 1 } :
        // Don't modify any other posts
        post,
      );
    default:
      return state;
  }
};

export default posts;
