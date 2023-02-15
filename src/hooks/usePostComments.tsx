import { useEffect, useState } from "react";
import axios from "axios";
import { RootState, setComments } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export interface IPostComments {
  id: string;
  author: string;
  name: string;
  body: string;
  parent_id: string;
  subreddit_id: string;
}

export function usePostComments() {
  const token = useSelector<RootState>(state => state.token);
  const comments = useSelector<RootState>(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__ && window.__token__ != 'undefined') {
      axios.get(`https://oauth.reddit.com/r/subreddit/comments`, {
        headers: { Authorization: `bearer ${token}` }
      })
        .then(({ data }) => {
          const commentsList = data.data.children;
          console.log(commentsList)
          dispatch(setComments(
            commentsList.map(({ data }: { [x: string]: any }): IPostComments | null => {
              return {
                id: data.id,
                author: data.author,
                body: data.body,
                name: data.name,
                parent_id: data.parent_id,
                subreddit_id: data.subreddit_id
              }
            })
          ))
        })
    }
  }, [token])

  return [comments];
}
