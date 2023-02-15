import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IUserData, meRequestAsync } from "../store/me/actions";

export function useUserData() {
  const token = useSelector<RootState, string>(state => state.token);
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!token) return;

    dispatch(meRequestAsync());
  }, [token])

  return [data]
}
