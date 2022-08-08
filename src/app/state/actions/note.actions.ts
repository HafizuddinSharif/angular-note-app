import { Injectable } from "@angular/core";
import { Action, props } from "@ngrx/store";
import { Note } from "../models/note.model";

import { createAction } from '@ngrx/store';

export const add_note = createAction("[NOTE] Add", props<{ note: Note }>())
export const remove_note = createAction("[NOTE] Remove", props<{ note_id: number }>())
export const update_note = createAction("[NOTE] Update", props<{ note: Note }>())

// export class AddNote implements Action {
//     readonly type = ADD_NOTE

//     constructor(public payload: Note) {}
// }

// export class RemoveNote implements Action {
//     readonly type = REMOVE_NOTE

//     constructor() {}
// }

// export type Actions = AddNote | RemoveNote