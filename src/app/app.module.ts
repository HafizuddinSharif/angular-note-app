import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { noteReducer } from './state/reducers/note.reducer';
import { QuillModule } from "ngx-quill";

import Quill from 'quill';

// from the index, which exports a lot of useful modules
import BlotFormatter from 'quill-blot-formatter';

// or, from each individual module
// import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);

import { AppComponent } from './app.component';
import { TextEditorComponent } from './components/home/text-editor/text-editor.component';
import { ListNotesComponent } from './components/home/list-notes/list-notes.component';
import { NoteComponent } from './components/home/note/note.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TextViewerComponent } from './components/home/text-viewer/text-viewer.component';
import { IndividualNoteComponent } from './components/home/individual-note/individual-note.component'
import { LoginGuard } from './guards/login.guard';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'direction': 'rtl' }],                         // text direction

  [ 'link', 'image'],          // add's image support
  [{ 'color': [] }],

  ['clean']                                         // remove formatting button
];

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo:'/login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ListNotesComponent,
    NoteComponent,
    HomeComponent,
    LoginComponent,
    TextViewerComponent,
    IndividualNoteComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      note: noteReducer,
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    QuillModule.forRoot({
      modules: {
        blotFormatter: {
          // empty object for default behaviour.
        },
        toolbar: toolbarOptions,
      },
      theme: 'snow'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
