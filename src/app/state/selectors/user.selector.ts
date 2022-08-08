import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { User } from "../models/user.model";

export const selectUser = (state: AppState) => state.user

// export const selectUserIsEditing = createSelector(
//     selectUser,
//     (state: User) => state.isEditing
// )