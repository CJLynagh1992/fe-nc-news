import React from 'react';
import './article.css';
import { getArticleById } from './api';
import { Link } from '@reach/router';
import VoterComponent from './VoterComponent';
import './votercomponent.css';

import Comments from './Comments';

class Article extends React.Component {
  state = {
    article: {}
  };
  render() {
    const { author, body, created_at, topic, title, votes, article_id } = this.state;
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
    getArticleById(this.props.id).then(article => {
      this.setState(article);
    });
  }
}

export default Article;
