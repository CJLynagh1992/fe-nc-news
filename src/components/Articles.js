import React from 'react';
import './articles.css';
import { Link } from '@reach/router';
import { getArticles } from './api';

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: ''
  };
  render() {
    return (
      <>
        <div>
          <h6>Sort By:</h6>
          <select onChange={this.handleChange}>
            <option>Date</option>
            <option>Comments</option>
            <option>Votes</option>
          </select>
        </div>
        {this.state.articles.map(article => {
          return (
            <div className="articledecor" key={article.article_id}>
              <h6>
                Posted by {article.author} on {article.created_at}. <Link to={`/topics/${article.topic}`}> Topic: {article.topic}</Link>
              </h6>
              <Link to={`/articles/${article.article_id}`} className="articleheading">
                {article.title}
              </Link>
              <h5>Total Comments: {article.comment_count}</h5>
              <h5>Votes: {article.votes}</h5>
            </div>
          );
        })}
      </>
    );
  }

  componentDidMount() {
    getArticles(this.props.topic).then(({ articles }) => {
      this.setState({ articles });
    });
  }
}
export default Articles;
