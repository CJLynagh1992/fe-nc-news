import React from 'react';
import './articles.css';
import { Link } from '@reach/router';
import { getArticles } from './api';
import Loading from './Loading';

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: '',
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <>
        <div>
          <h6>Sort By:</h6>
          <form onSubmit={this.handleSubmit}>
            <select name="sort_by" onChange={this.handleChange}>
              <option>Date</option>
              <option>Comments</option>
              <option>Votes</option>
            </select>
            <button>Submit</button>
          </form>
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
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    getArticles(this.props.topic).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }
}
export default Articles;
