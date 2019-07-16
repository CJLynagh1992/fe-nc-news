import React from 'react';
import { postComment } from './api';

class CommentAdder extends React.Component {
  state = {
    body: ''
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSumbit}>
        <label htmlFor="body">
          Penny for your thoughts:
          <input type="text" name="body" id="body" onChange={this.handleChange} value={body} required />
        </label>
        <button>Submit</button>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSumbit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, username } = this.props;

    postComment(article_id, { body, username }).then(newComment => {
      this.props.addComment(newComment);
    });
  };
}

export default CommentAdder;
