import React from 'react';
import { Link } from '@reach/router';
import { getTopicsList } from './api';
import './topics.css';
import Loading from './Loading';

class Topics extends React.Component {
  state = { topics: [], isLoading: true };
  render() {
    if (this.state.isLoading) return <Loading />;
    return this.state.topics.map(topic => {
      return (
        <div className="topicdecor" key={topic.slug}>
          <Link to={`/topics/${topic.slug}`} className="topicLink">
            {topic.slug}
          </Link>
          <h4>{topic.description}</h4>
        </div>
      );
    });
  }

  componentDidMount() {
    getTopicsList().then(({ topics }) => {
      this.setState({ topics, isLoading: false });
    });
  }
}

export default Topics;
