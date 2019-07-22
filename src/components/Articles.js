import React from 'react';
import './articles.css';
import { getArticles } from './api';
import Loading from './Loading';
import Sorter from './Sorter';
import ErrorHandling from './ErrorHandling';
import ArticleCard from './ArticleCard';
// import InfiniteScroll from 'react-infinite-scroll-component';

class Articles extends React.Component {
  state = {
    articles: [],
    sort: 'created_at',
    isLoading: true,
    err: null
  };
  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.err) return <ErrorHandling err={this.state.err} />;
    return (
      <>
        <Sorter setSort={this.setSort} type="articles" />
        {this.state.articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </>
    );
  }

  setSort = event => {
    const { value } = event.target;
    this.setState({ sort: value });
  };

  componentDidMount() {
    getArticles(this.props.topic)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort !== this.state.sort || prevProps.topic !== this.props.topic) {
      getArticles(this.props.topic, this.state.sort).then(({ articles }) => {
        this.setState({ articles });
      });
    }
  }
}
export default Articles;
