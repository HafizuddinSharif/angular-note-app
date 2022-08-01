import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from "ngx-quill";

import { AppComponent } from './app.component';
import { TextEditorComponent } from './components/home/text-editor/text-editor.component';
import { ListNotesComponent } from './components/home/list-notes/list-notes.component';
import { NoteComponent } from './components/home/note/note.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ListNotesComponent,
    NoteComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    QuillModule.forRoot({
      modules: {
        toolbar: [['bold', 'italic'], ['link', 'image']],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
