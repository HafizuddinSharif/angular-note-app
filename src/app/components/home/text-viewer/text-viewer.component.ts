import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { Note } from 'src/app/state/models/note.model';
import { selectNote } from 'src/app/state/selectors/note.selector';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent implements OnInit, OnChanges {

  content: string;
  note: Observable<Note>

  @Input() idSelected: number
  @Output() openEditor = new EventEmitter()

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.store.select(selectNote(this.idSelected)).subscribe(note => {

      if (note == null) {
        console.log("Cannot find note")
        this.openEditor.emit(true)
        return
      }

      this.content = `<h1>${note.title}</h1><br />` + note.content
    })

    
  }


}
