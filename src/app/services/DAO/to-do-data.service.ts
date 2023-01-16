import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-to-do/list-to-do.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http : HttpClient) { }


  getTodoData(name: string){
    return this.http.get<ToDo[]>(`http://localhost:8080/users/${name}/todos`);
  }

  deleteTodo(name : String, id: any ){
    return this.http.delete(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  retriveTodo(name : String, id: any ){
    return this.http.get<ToDo>(`http://localhost:8080/users/${name}/todos/${id}`)
  }

}
