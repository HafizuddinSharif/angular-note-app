import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/state/models/note.model';
import { AppState } from 'src/app/state/app.state';
import { selectAllNotes, selectNote } from 'src/app/state/selectors/note.selector';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: Observable<Note[]>
  found: Observable<Note>

  @Output() openNoteId = new EventEmitter()
  @Output() deleteNoteId = new EventEmitter()

  constructor(private store: Store<AppState>) {
    this.notes = this.store.select(selectAllNotes)
  }

  ngOnInit(): void {
  }

  getNoteId(id: any) {
    this.openNoteId.emit(id);
  }

  getDeleteNoteId(id: any) {
    this.deleteNoteId.emit(id)
  }
}
 