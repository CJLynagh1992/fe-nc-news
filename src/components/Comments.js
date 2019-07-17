import React from 'react';
import { getCommentsByArticleId } from './api';
import CommentAdder from './CommentAdder';
import { deleteComment } from './api';
import VoterComponent from './VoterComponent';

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
              <VoterComponent type="comment" votes={comment.votes} id={comment.comment_id} />
              <h5 className="commentbody">{comment.body}</h5>
              <button onClick={() => this.handleDelete(comment.comment_id)}>Delete Comment</button>
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

  handleDelete = comment_id => {
    deleteComment(comment_id); // error state
    this.setState({ comments: this.state.comments.filter(comment => comment.comment_id !== comment_id) });
  };
}

export default Comments;
