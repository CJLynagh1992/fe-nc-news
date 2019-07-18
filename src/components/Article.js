import React from 'react';
import './article.css';
import { getArticleById } from './api';
import { Link } from '@reach/router';
import VoterComponent from './VoterComponent';
import './votercomponent.css';
import Loading from './Loading';
import ErrorHandling from './ErrorHandling';

import Comments from './Comments';

class Article extends React.Component {
  state = {
    article: {},
    err: null,
    isLoading: true
  };
  render() {
    const { article, err, isLoading } = this.state;
    const { author, body, created_at, topic, title, votes, article_id } = article;
    if (isLoading) return <Loading />;
    if (err) return <ErrorHandling err={err} />;
    return (
      <div className="articledecor">
        <section className="sectiontag">
          <VoterComponent type="article" votes={votes} id={article_id} />
          <div className="articleinfo">
            <h6>
              Posted by {author} on {new Date(created_at).toString().slice(0, 21)}. <Link to={`/topics/${topic}`}> Topic: {topic}</Link>
            </h6>
            <h3 className="articleheading">{title}:</h3>
            <h4 className="articlebody">{body}</h4>
          </div>
        </section>
        <Comments article_id={this.props.id} username={this.props.username} />
      </div>
    );
  }
  componentDidMount() {
    getArticleById(this.props.id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }
}

export default Article;
