import { createReducer, on } from '@ngrx/store';
import { login_user } from '../actions/user.actions';

import { User } from "../models/user.model";
import * as UserActions from "../actions/user.actions"

export const initialState: User = {
    id: 0,
    username: "",
    password: ""
}

export const userReducer = createReducer(
    initialState,
    on(login_user, function (state, action) {
        return {...state, ...action}
    })
)
