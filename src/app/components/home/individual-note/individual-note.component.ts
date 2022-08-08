import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { remove_note } from 'src/app/state/actions/note.actions';
import { AppState } from 'src/app/state/app.state';
import { Note } from 'src/app/state/models/note.model';

@Component({
  selector: 'app-individual-note',
  templateUrl: './individual-note.component.html',
  styleUrls: ['./individual-note.component.scss']
})
export class IndividualNoteComponent implements OnInit {

  emitObj: Object

  @Input() note: Note
  @Output() openNoteId = new EventEmitter()
  @Output() deleteNoteId = new EventEmitter()

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  clickNote() {

    this.emitObj = {
      note_id: this.note.id,
      option: 1,
    }

    // this.openNoteId.emit(this.note.id)
    this.openNoteId.emit(this.emitObj)
  }

  editNote() {

    this.emitObj = {
      note_id: this.note.id,
      option: 2,
    }

    this.openNoteId.emit(this.emitObj)
  }

  deleteNote() {
    this.store.dispatch(remove_note({note_id: this.note.id}))
  }

}
