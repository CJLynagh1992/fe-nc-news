import React from 'react';
import { getCommentsByArticleId } from './api';
import CommentAdder from './CommentAdder';
import { deleteComment } from './api';
import Sorter from './Sorter';
import './comments.css';
import CommentCard from './CommentCard';
import ErrorHandling from './ErrorHandling';
import Loading from './Loading';

class Comments extends React.Component {
  state = { comments: [], sort: 'created_at', isLoading: true };
  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.err) return <ErrorHandling err={this.state.err} />;
    return (
      <>
        <CommentAdder article_id={this.props.article_id} addComment={this.addComment} username={this.props.username} />
        <Sorter setSort={this.setSort} type="comments" />
        {this.state.comments.map(comment => {
          return <CommentCard comment={comment} key={comment.comment_id} username={this.props.username} handleDelete={this.handleDelete} />;
        })}
      </>
    );
  }
  componentDidMount() {
    getCommentsByArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort !== this.state.sort) {
      getCommentsByArticleId(this.props.article_id, this.state.sort).then(comments => {
        this.setState({ comments });
      });
    }
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

  setSort = event => {
    const { value } = event.target;
    this.setState({ sort: value });
  };
}

export default Comments;
