import { AppStateType } from "../redux-store";

export const isAuthSelector = (state: AppStateType) => {
  return state.auth.userId;
};
