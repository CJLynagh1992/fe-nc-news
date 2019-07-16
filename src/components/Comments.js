import React from 'react';
import { getCommentsByArticleId } from './api';
import CommentAdder from './CommentAdder';

class Comments extends React.Component {
  state = { comments: [] };
  render() {
    return (
      <>
        <CommentAdder article_id={this.props.article_id} addComment={this.addComment} username={this.props.username} />
        {this.state.comments.map(comment => {
          return (
            <div className="commentdecor">
              <h6>
                Comment posted by {comment.author} on {comment.created_at}. Total Votes: {comment.votes}
              </h6>
              <h5 className="commentbody">{comment.body}</h5>
            </div>
          );
        })}
      </>
    );
  }
  componentDidMount() {
    getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  addComment = commentToAdd => {
    this.setState(({ comments }) => {
      return { comments: [commentToAdd, ...comments] };
    });
  };
}

export default Comments;
