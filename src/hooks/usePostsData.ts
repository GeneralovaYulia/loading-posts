import { useEffect } from "react";
import axios from 'axios';
import { RootState, setPosts } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export interface IPostData {
  id: string;
  author: string;
  avatar: string;
  title: string;
  postContent: string;
  previewImg: string;
  rating: number;
  subreddit: string;
}

export function usePostData() {
  const token = useSelector<RootState, string>(state => state.token);
  const posts = useSelector<RootState, string>(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__ && window.__token__ != 'undefined') {
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `bearer ${token}` }
      })
        .then(({ data }) => {
          const postList = data.data.children;
          dispatch(setPosts(
            postList.map(({ data }: { [x: string]: any }): IPostData | null => {
              return {
                id: data.id,
                author: data.author,
                title: data.title,
                postContent: data.selftext,
                avatar: data.sr_detail.icon_img,
                previewImg: data.sr_detail.icon_img,
                rating: data.score,
                subreddit: data.subreddit,
              }
            })
              .filter((post: IPostData | null) => post !== null),
          ))
        })
    }
  }, [token])

  return [posts];
}
