const posts = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return state.map((post, idx) => idx === i ?
        // Increment likes of the matching post
        { ...post, likes: post.likes + 1} :
        // Don't modify any other posts
        post
      );
    default:
      return state;
  }
};

export default posts;
