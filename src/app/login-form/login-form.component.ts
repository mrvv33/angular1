import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  loginForm:FormGroup;
  constructor(fb:FormBuilder){
    this.loginForm=fb.group({
     username:new FormControl('',Validators.required),
     password:"",
     email:"",
     phonenumber:"",
     namesurname:"",
    })
  }
  ngOnInit(): void {
      
  }
  signin(){
    if(this.loginForm.valid)
      console.log(this.loginForm.value);
  }

}
