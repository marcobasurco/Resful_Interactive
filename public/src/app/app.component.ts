import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  tasks: [];
  task: [];
  
  ifData: boolean;
  
  num: number;
  randNumber: number;
  str: string;
  first_name: string;
  snacks: string[];
  loggedIn: boolean;
  
  
  constructor(private _httpService: HttpService){}
  
  ngOnInit() {
    this.ifData = false;
    // this.num = 7;
    // this.randNumber = Math.floor((Math.random() * 2) + 1);
    // this.str = "Hello Angular Developer!";
    // this.first_name = "Alpha";  
    // this.snacks = ['vanilla late with skim milk', 'brushed suede', 'cookie'];
    // this.loggedIn = false;

    // this.getTaskFromServices();


  }

  getTaskFromServices() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got your task!", data)
      this.tasks = data['data'];
    });
  }

  getTaskFromServicesbyID(id) {
    let observable = this._httpService.getTasksByID(id);
    observable.subscribe(data => {
      console.log("Got your task!", data)
      this.tasks = data['data'];
    });
  }

  onButtonClick() {
    console.log('Click event is working');
  }

  onButtonClickParam(num: Number): void {
    console.log('Click event is working with num param: ${num}');
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log('Got our data!', data));
  }


  onButtonClickParams(num: Number, str: String): void {
    console.log('Click event is working with num param:', num, 'and, str param:', str);
  }

  onButtonClickEvent(event: any): void {
    console.log('Click event is working with event: ${event}', event);
  }

  onButtomGetTask() {
    this.getTaskFromServices();
  }

  onButtomGetDescriptions(id): void {
    let observable = this._httpService.getTasksByID(id);
    observable.subscribe(data => {
      this.task = data['data'];
      this.ifData = true;
      }
    );
  
  }



}
