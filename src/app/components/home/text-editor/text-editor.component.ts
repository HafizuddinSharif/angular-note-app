import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Note } from 'src/app/state/models/note.model';
import { add_note, update_note } from 'src/app/state/actions/note.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getNoteCount, selectNote } from 'src/app/state/selectors/note.selector';
import { getUser } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnChanges {

  editorForm: FormGroup
  content: string
  id: number
  title: string
  newNote: Note
  user_id: number

  randomText: string = "This is a text"

  @Input() idSelected: number

  @Output() editorClose = new EventEmitter()
  @Output() latestNoteId = new EventEmitter()


  constructor(private store: Store<AppState>) {
    store.select(getNoteCount).subscribe(count => this.id = count + 1);
    store.select(getUser).subscribe(user => this.user_id = user.id)
    // console.log("The number produced is: ", this.id)
  }

  ngOnInit(): void {
    this.fillEditor()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillEditor()
  }

  onSubmit() {

    this.content = this.editorForm.get('editor')!.value
    this.title = this.editorForm.get('title')!.value

    // console.log(this.editorForm.get('editor')!.value)

    if (this.content == ""  || this.title == "") {
      // console.log("No content!")
      return
    }

    this.newNote = {
      id: this.idSelected > 0 ? this.idSelected : this.id,
      user_id: this.user_id,
      date: new Date(),
      title: this.title,
      content: this.content
    }

    if (this.idSelected > 0) {
      this.store.dispatch(update_note({note: this.newNote}))
      this.latestNoteId.emit(this.idSelected)
      // console.log("This is invoked")
    } else {
      this.store.dispatch(add_note({note: this.newNote}))
      this.latestNoteId.emit(this.id)
    }

    this.editorClose.emit(false)
  }

  // Helper function for this class
  private fillEditor() {

    if (this.idSelected > 0) {
      this.store.select(selectNote(this.idSelected)).subscribe( note => {

        if (note) {
          this.editorForm = new FormGroup({
            'editor': new FormControl(note.content),
            'title': new FormControl(note.title)
          })

        } else {

          this.editorForm = new FormGroup({
            'editor': new FormControl(""),
            'title': new FormControl(""),
          })

        }
      })
    } else {
      this.editorForm = new FormGroup({
        'editor': new FormControl(""),
        'title': new FormControl(""),
      })
    }
    
    this.content = ""

  }

}
