import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo } from '../list-to-do/list-to-do.component';
import { ToDoDataService } from '../services/DAO/to-do-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    id : number;
    todo : ToDo;

  constructor(
    private todoService : ToDoDataService,
    private route : ActivatedRoute
  ) {
      this.todo = new ToDo(0,"default",false,new Date());
      this.id = 0;
   }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.todoService.retriveTodo("krupa",this.id).subscribe(
      data => this.todo = data
    )

  }
  updateTodo(){
 
  }
}
