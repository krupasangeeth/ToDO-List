import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDAOService {

  constructor(
    private http : HttpClient
  ) { }
  getWelcomedata(){
    return this.http.get("http://localhost:8080/hello/krupaSangeeth");
  }
}
