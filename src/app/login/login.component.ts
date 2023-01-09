import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../services/hard-coded-authentication.service';

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
  constructor(private router : Router,public hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit(): void {
    console.log("in login component");
  }
  handleLogin(){
   if(this.hardCodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
      this.inValidLogin = false;
   }else{
    this.inValidLogin = true;
   }
  }

}
