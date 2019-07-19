import React from 'react';
import { postComment } from './api';

class CommentAdder extends React.Component {
  state = {
    body: ''
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, username } = this.props;

    postComment(article_id, { body, username }).then(newComment => {
      this.props.addComment(newComment);
    });
    this.setState({ body: '' });
  };
}

export default CommentAdder;
