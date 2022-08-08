import { Note } from "./models/note.model";
import { User } from "./models/user.model";

export interface AppState {
    readonly note: Note[];
    readonly user: User;
}
