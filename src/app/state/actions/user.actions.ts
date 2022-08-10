import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { User } from "../models/user.model";
import { createAction , props } from "@ngrx/store";

export const login_user = createAction("[USER] Login", props<{user: User}>())
export const logout_user = createAction("[USER] Logout")