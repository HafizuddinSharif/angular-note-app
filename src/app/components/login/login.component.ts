import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  username: string;
  password: string;

  constructor(private authService : AuthService, private router : Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }

  onSubmit(form: FormGroup) {

    this.username = form.value.username
    this.password = form.value.password

    console.log('Valid?', form.valid);
    console.log('Username:', form.value.username);
    console.log('Password:', form.value.password);

    this.authService.login(this.username, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/home']); 
      });
  }

}
