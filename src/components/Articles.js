import React from 'react';
import axios from 'axios';
import './articles.css';
import { Link } from '@reach/router';

class Articles extends React.Component {
  state = {
    articles: [],
    topic: ''
  };
  render() {
    return this.state.articles.map(article => {
      return (
        <Link to={`articles/${article.article_id}`}>
          <div className="articledecor" key={article.article_id}>
            <h6>
              Posted by {article.author} on {article.created_at}. Topic: {article.topic}
            </h6>
            <h2 className="articleheading">{article.title}</h2>
            <h5>Total Comments: {article.comment_count}</h5>
            <h5>Votes: {article.votes}</h5>
          </div>
        </Link>
      );
    });
  }

  componentDidMount() {
    axios.get(`https://colum-nc-news.herokuapp.com/api/articles`).then(({ data }) => {
      this.setState({ articles: data.articles });
    });
  }
}

export default Articles;
