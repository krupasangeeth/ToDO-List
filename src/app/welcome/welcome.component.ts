import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDAOService } from '../services/DAO/welcome-dao.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = '';
  constructor(
    private route : ActivatedRoute,
    private service : WelcomeDAOService
    ) { }
  message1 = 'Message is printing';
  ngOnInit(): void {
    this.user = this.route.snapshot.params['name'];
  }
  getDBDetails(){

    console.log(this.service.getWelcomedata());
  }

}
