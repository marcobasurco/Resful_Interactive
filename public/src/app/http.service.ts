import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
     return this._http.get('/all')
  }

  postToServer(num) {
    return this._http.post('/new', num);
  }

  getTasksByID(id) {
    console.log(id);
    return this._http.get('/'+id)
  }
}
 