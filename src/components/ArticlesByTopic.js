import React from 'react';
import Articles from './Articles';

class ArticlesByTopic extends React.Component {
  render() {
    return (
      <div>
        <Articles topic={this.props.topic} />
      </div>
    );
  }
}

export default ArticlesByTopic;
