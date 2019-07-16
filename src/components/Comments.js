import React from 'react';
import { getCommentsByArticleId } from './api';

class Comments extends React.Component {
  state = { comments: [] };
  render() {
    return this.state.comments.map(comment => {
      return (
        <div className="commentdecor">
          <h6>
            Comment posted by {comment.author} on {comment.created_at}. Total Votes: {comment.votes}
          </h6>
          <h5 className="commentbody">{comment.body}</h5>
        </div>
      );
    });
  }
  componentDidMount() {
    getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
}

export default Comments;
