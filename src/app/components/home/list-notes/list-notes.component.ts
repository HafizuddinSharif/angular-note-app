import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  @Output() isEditorOpen = new EventEmitter()
  @Output() openNoteId = new EventEmitter()
  @Output() deleteNoteId = new EventEmitter()

  isEditing: boolean = true

  constructor(private authService : AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogout() {
      this.authService.logout();
      this.router.navigate(['/']);
  }

  onAdd() {
    // localStorage.setItem('isEditing', "true");
    // console.log(localStorage)
    this.isEditorOpen.emit(true)

  }

  getNoteId(id: any) {
    this.openNoteId.emit(id)
  }

  getDeleteNoteId(id: any) {
    this.deleteNoteId.emit(id)
  }


}
