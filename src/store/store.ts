import { ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQURST, ME_REQURST_ERROR, ME_REQURST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, SAVE_TOKEN, SaveTokenAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";

export type RootState = {
  comments: {};
  posts: string;
  commentText: string;
  token: string;
  me: MeState;
}

const initialState: RootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
  posts: "",
  comments: {},
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
})

const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

const SET_POSTS = 'SET_POSTS';
export type SetPostsAction = {
  type: typeof SET_POSTS;
  text: {};
}

export const setPosts: ActionCreator<SetPostsAction> = (text) => ({
  type: SET_POSTS,
  text,
});

const SET_COMMENTS = 'SET_COMMENTS';
export type SetCommentsAction = {
  type: typeof SET_COMMENTS;
  text: {};
}

export const setComments: ActionCreator<SetCommentsAction> = (text) => ({
  type: SET_COMMENTS,
  text,
});

type MyAction = UpdateCommentAction
  | SetTokenAction
  | SaveTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | SetPostsAction
  | SetCommentsAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case SET_POSTS:
      return {
        ...state,
        posts: action.text,
      }
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.text,
      }
    case ME_REQURST:
    case ME_REQURST_SUCCESS:
    case ME_REQURST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default:
      return state;
  }
}
