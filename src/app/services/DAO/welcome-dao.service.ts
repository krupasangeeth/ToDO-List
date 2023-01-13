import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HellowWorldData{
  constructor(public message : String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDAOService {

  constructor(
    private http : HttpClient
  ) { }

  getWelcomedata(){
    return this.http.get<HellowWorldData>("http://localhost:8080/helloworldbean");
  }

  getWelcomedatawithParameters(name: string){
    return this.http.get<HellowWorldData>(`http://localhost:8080/hello/${name}`);
  }

}
