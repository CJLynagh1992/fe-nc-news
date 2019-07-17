import React from 'react';
import './articles.css';
import { getArticleById } from './api';
import { Link } from '@reach/router';

import Comments from './Comments';

class Article extends React.Component {
  state = {
    article: {}
  };
  render() {
    const { author, body, created_at, topic, title, comment_count, votes } = this.state;
    return (
      <div className="articledecor">
        <h6>
          Posted by {author} on {new Date(created_at).toString().slice(0, 24)}. <Link to={`/topics/${topic}`}> Topic: {topic}</Link>
        </h6>
        <h2 className="articleheading">{title}</h2>
        <h5>Total Comments: {comment_count}</h5>
        <h5>Votes: {votes}</h5>
        <h4 className="articlebody">{body}</h4>
        <Comments article_id={this.props.id} username={this.props.username} />
      </div>
    );
  }
  componentDidMount() {
    getArticleById(this.props.id).then(article => {
      this.setState(article);
    });
  }
}

export default Article;
