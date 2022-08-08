import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() isEditorOpen2: boolean = true
  @Input() idSelected: number

  constructor() { }

  ngOnInit(): void {
  }

  receiveData(value: any) {
    this.isEditorOpen2 = value
  }

  viewNote(value: any) {
    this.idSelected = value
  }

  getNoteId(obj: any) {

    if (obj.option === 1) {
      this.idSelected = obj.note_id
      this.isEditorOpen2 = false
    }

    if (obj.option === 2) {
      this.idSelected = obj.note_id
      this.isEditorOpen2 = true
      console.log("✏️ Edit note...")
    }

    
  }

  openEditor(id: any) {
    this.isEditorOpen2 = true
    this.idSelected = 0
  }

  getDeleteNoteId(id: any) {

  }

}
