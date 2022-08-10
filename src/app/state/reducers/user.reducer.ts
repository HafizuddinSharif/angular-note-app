import { createReducer, on } from '@ngrx/store';
import { logout_user , login_user } from '../actions/user.actions';
import { User } from "../models/user.model";

export const initialState: User = 
    {
      id: 0,
      username: '',
      password: ''
    }


export const userReducer = createReducer(
    initialState,
    on(login_user, (state, action) => action.user),
    on(logout_user, state => initialState)
)
