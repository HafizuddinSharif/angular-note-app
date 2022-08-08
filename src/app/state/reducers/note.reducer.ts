import { Action } from "@ngrx/store";
import { Note } from "../models/note.model";
import * as NoteActions from "../actions/note.actions"

import { createReducer, on } from '@ngrx/store';
import { add_note , remove_note , update_note } from "../actions/note.actions";

// export const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

export const initialState: Note = {
    id: 1,
    user_id: 1,
    date: new Date(),
    status: "idle",
    title: "Entry 1",
    content: "This is from <strong>INITIAL STATE</strong>"
} 

export const noteReducer = createReducer(
    [initialState],
    on(add_note, (state, action) => [...state, action.note]),
    on(remove_note, (state, action) => state.filter( note => note.id != action.note_id)),
    on(update_note, (state, action) => state.map( note => {

        if (action.note.id == note.id) {
            const updateNote = {
                ...note,
                content: action.note.content,
                title: action.note.title
            }

            return updateNote
        }

        return note
    })
    )
)