import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { User } from "../models/user.model";

export const selectUser = (state: AppState) => state.user

export const getUser = createSelector(
    selectUser,
    (state: User) => state
)