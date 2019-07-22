import React from 'react';
import VoterComponent from './VoterComponent';
import './comments.css';

export default function CommentCard({ comment, username, handleDelete }) {
  return (
    comment && (
      <div>
        <section className="commentsectiontag">
          <VoterComponent type="comment" votes={comment.votes} id={comment.comment_id} />
          <div className="cardsdisplay">
            <h6>
              Comment posted by {comment.author} on {new Date(comment.created_at).toString().slice(0, 21)}
            </h6>
            <h5 className="commentbody">{comment.body}</h5>
            {username === comment.author && <button onClick={() => handleDelete(comment.comment_id)}>Delete Comment</button>}
          </div>
        </section>
      </div>
    )
  );
}
