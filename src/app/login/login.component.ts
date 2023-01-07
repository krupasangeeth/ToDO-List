import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'default';
  password = '';
  userErrorMessage = 'Invalid Credentials';
  inValidLogin = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log("in login component");
  }
  handleLogin(){
   if(this.username === 'default' && this.password === 'default'){
      this.router.navigate(['welcome',this.username]);
      this.inValidLogin = false;
   }else{
    this.inValidLogin = true;
   }
  }

}
