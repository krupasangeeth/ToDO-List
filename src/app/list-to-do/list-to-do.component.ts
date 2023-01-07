import { Component, OnInit } from '@angular/core';

export class ToDo{
  constructor(
    public id : number,
    public description : string,
    public status : boolean,
    public targetDate : Date
  ){

  }
}


@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})



export class ListToDoComponent implements OnInit {

  todos = [

    new ToDo(1,'Reading a Book',false, new Date()),
    new ToDo(1,'Learn to Dance',false, new Date()),
    new ToDo(1,'Eating Food',false, new Date())

    // {id : 1, description : 'Reading a Book' },
    // {id : 2, description : 'Learn to Dance'},
    // {id : 3, description : 'Eating Food'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
