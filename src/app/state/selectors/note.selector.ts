import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Note } from "../models/note.model";

export const selectNotes = (state: AppState) => state.note

export const selectAllNotes = createSelector(
    selectNotes,
    (state: Note[]) => state
)

export const selectNote = (note_id: number) => createSelector(
    selectNotes,
    (state: Note[]) => state.filter( note => note.id == note_id)[0]
)

export const getNoteCount = createSelector(
    selectNotes,
    (state: Note[]) => state.length
)