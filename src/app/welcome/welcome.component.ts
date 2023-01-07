import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = '';
  constructor(private route : ActivatedRoute) { }
  message1 = 'Message is printing';
  ngOnInit(): void {
    this.user = this.route.snapshot.params['name'];
  }

}
