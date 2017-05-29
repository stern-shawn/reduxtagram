// Action to increment/decrement like count of a photo
export const increment = index => ({
  type: 'INCREMENT_LIKES',
  index,
});

// Action to add a comment to a photo
export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
});

// Action to remove a comment from a photo
export const removeComment = (postId, index) => ({
  type: 'REMOVE_COMMENT',
  postId,
  index,
});
