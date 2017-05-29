import React, { Component } from 'react';

class Comments extends Component {
  renderComment = (comment, idx) => (
    <div className="comment" key={idx}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment" onClick={() => this.props.removeComment(this.props.params.postId, idx)}>&times;</button>
      </p>
    </div>
  );

  handleSubmit = (e) => {
    e.preventDefault();
    // No blank submissions
    if (this.author.value && this.comment.value) {
      const { postId } = this.props.params; // ES6 destructuring again
      const author = this.author.value;
      const comment = this.comment.value;
      // Dispatch to reducer
      this.props.addComment(postId, author, comment);
      // Reset the form for next comment / no duplicate text submission
      this.commentForm.reset();
    }
  };

  render() {
    // ES6 classes don't automatically bind their functions, make sure to use arrows to do binding
    // In the case of .map, we can pass this as context
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref={(form) => { this.commentForm = form; }}
          onSubmit={this.handleSubmit}
          className="comment-form"
        >
          <input type="text" ref={(input) => { this.author = input; }} placeholder="author" />
          <input type="text" ref={(input) => { this.comment = input; }} placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  };
};

export default Comments;
