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
          <Link to={`/topics/${topic.slug}`} className="topiclink">
            {topic.slug === 'football' ? <i className="em em-soccer" /> : topic.slug === 'cooking' ? <i className="em em-fork_and_knife" /> : topic.slug === 'coding' ? <i className="em em-computer" /> : topic.slug}
          </Link>
          <Link className="textlink" to={`/topics/${topic.slug}`}>
            {topic.description}
          </Link>
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
