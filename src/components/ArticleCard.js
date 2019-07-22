import React from 'react';
import VoterComponent from './VoterComponent';
import { Link } from '@reach/router';

export default function ArticleCard({ article }) {
  return (
    <div>
      <section className="sectiontag">
        <VoterComponent type="article" votes={article.votes} id={article.article_id} />
        <div>
          <h6>
            Posted by {article.author} on {new Date(article.created_at).toString().slice(0, 21)}
            <Link to={`/topics/${article.topic}`}> Topic: {article.topic}</Link>
          </h6>
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          <h5>
            <i className="em em-speaking_head_in_silhouette" />
            {article.comment_count}
          </h5>
        </div>
      </section>
      ;
    </div>
  );
}
