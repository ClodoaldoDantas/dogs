import React, { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

import './styles.scss';

export default function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef();
  const { isLogged } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className='comments'>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {isLogged && (
        <PhotoCommentsForm setComments={setComments} id={props.id} />
      )}
    </>
  );
}
