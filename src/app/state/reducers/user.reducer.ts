import { createReducer, on } from '@ngrx/store';
import { toggle_editing, login_user } from '../actions/user.actions';

import { User } from "../models/user.model";
import * as UserActions from "../actions/user.actions"

export const initialState: User = {
    id: 1,
    username: "admin",
    password: "admin",
    isEditing: true
}

export const userReducer = createReducer(
    initialState,
    on(toggle_editing, function (state) {
        return {...state, isEditing: !state.isEditing}
    }),
    on(login_user, function (state, action) {
        return {...state, ...action}
    })
)
