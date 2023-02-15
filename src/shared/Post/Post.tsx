import React, { useEffect, useRef, useState } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Comment } from './Comment';
import { CommentFormContainer } from '../CommentFormContainer';
import { useNavigate, useParams} from 'react-router-dom'

interface IPost {
  id?: string;
  onClose?: () => void;
  subreddit?: string;
}

interface ICommentsData {
  id: string;
  author: string;
  avatar: string;
  text: string;
  subreddit: string;
}

export function Post(props: IPost) {
  const [comments, setComments] = useState<ICommentsData[]>([]);

  const userId = useParams();

  useEffect(() => {
    axios.get(`https://api.reddit.com/comments/${userId.id}`)
      .then(({ data }) => {
        const commentsList = data[1].data.children;
        setComments(
          commentsList.map(({ data }: { [x: string]: any }): ICommentsData | null => {
            return {
              author: data.author,
              text: data.body,
              avatar: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png',
              id: data.id,
              subreddit: data.subreddit,
            }
          })
        )
      })
  }, [])

  const ref = useRef<HTMLDivElement>(null);
  const history = useNavigate();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history('/')
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Следует отметить, что новая модель огранизационной деятельности поможет</h2>

      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
      </div>

      <CommentFormContainer />

      <ul className={styles.cardsList}>
        {comments.map((item: any) =>
          <Comment
            id={item.id}
            author={item.author}
            text={item.text}
            avatar={item.avatar}
          />
        )}
      </ul>

    </div>
  ), node);
}
