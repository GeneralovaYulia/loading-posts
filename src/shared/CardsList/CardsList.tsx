import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function CardsList() {
  const token = useSelector<RootState, string>(state => state.token);
  const [posts, setPost] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [loadCouner, setLoadCounter] = useState<number>(1);

  const buttonOfList = useRef<HTMLLIElement>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/rising?sr_detail=true', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 10,
            after: nextAfter,
          }
        })

        setNextAfter(after);
        setPost(prevChildren => prevChildren.concat(...children));

        setLoadCounter(loadCouner + 1);

      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadCouner < 3) {
        load();
      }
    }, {
      rootMargin: '5px',
    });

    if (buttonOfList.current) {
      observer.observe(buttonOfList.current);
    }

    return () => {
      if (buttonOfList.current) {
        observer.unobserve(buttonOfList.current);
      }
    }
  }, [buttonOfList.current, nextAfter, token, loadCouner]);

  const buttonLoadHandler = () => {
    setLoadCounter(1)
  }

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div>
          <Card id={'yipt7s'} subreddit={'meirl'} author={'Дмитрий Веришин'} title={'Lorem Ipsum'} rating={0} avatar={'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg'} previewImg={'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg'} postContent={'lorem'} />
          <div style={{ textAlign: 'center'}}>Войдите чтобы увидеть больше публикаций</div>
        </div>
      )}

      {posts.map(post => (
        <Card
          key={post.data.id}
          id={post.data.id}
          author={post.data.author}
          title={post.data.title}
          rating={post.data.score}
          avatar={post.data.sr_detail.icon_img}
          previewImg={post.data.sr_detail.icon_img}
          subreddit={post.data.subreddit}
          postContent={post.data.selftext}
        />
      ))}

      <li ref={buttonOfList}></li>

      {loadCouner === 3 && !loading && (
        <div className={styles.loadButton}>
          <button
            onClick={() => {
              buttonLoadHandler();
            }}>
            Загрузить ещё
          </button>
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center' }}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role='alert' style={{ textAlign: 'center' }}>
          {errorLoading}
        </div>
      )}
    </ul>
  )
}
