import React from 'react';
import './articles.css';
import { Link } from '@reach/router';
import { getArticles } from './api';
import Loading from './Loading';
import VoterComponent from './VoterComponent';
import Sorter from './Sorter';

class Articles extends React.Component {
  state = {
    articles: [],
    sort: 'created_at',
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <>
        <Sorter setSort={this.setSort} type="articles" />
        {this.state.articles.map(article => {
          return (
            <section className="sectiontag">
              <VoterComponent type="article" votes={article.votes} id={article.article_id} />
              <div key={article.article_id}>
                <h6>
                  Posted by {article.author} on {new Date(article.created_at).toString().slice(0, 21)}
                  <Link to={`/topics/${article.topic}`}> Topic: {article.topic}</Link>
                </h6>
                <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
                <h5>Comments: {article.comment_count}</h5>
              </div>
            </section>
          );
        })}
      </>
    );
  }

  setSort = event => {
    const { value } = event.target;
    this.setState({ sort: value });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    getArticles(this.props.topic).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort !== this.state.sort) {
      getArticles(this.props.topic, this.state.sort).then(({ articles }) => {
        this.setState({ articles });
      });
    }
  }
}
export default Articles;
