import React from 'react';
import { Link } from '@reach/router';
import { getTopicsList } from './api';
import './topics.css';

class Topics extends React.Component {
  state = { topics: [] };
  render() {
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
      this.setState({ topics });
    });
  }
}

export default Topics;
