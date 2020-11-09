import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

import './styles.scss';

export default function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const { isLogged } = useContext(UserContext);

  return (
    <>
      <ul className='comments'>
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
