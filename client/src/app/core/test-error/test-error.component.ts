import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseURL = environment.apiUrl;
  validationErrors: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseURL + 'products/42').subscribe(
      {
        next: (response) => { console.log(response); },
        error: (e: any) => { console.log(e); },
        complete: () => { console.log('complete'); }
      }
    );
  }

  get500Error(){
    this.http.get(this.baseURL + 'buggy/servererror').subscribe(
      {
        next: (response) => { console.log(response); },
        error: (e: any) => { console.log(e); },
        complete: () => { console.log('complete'); }
      }
    );
  }

  get400Error(){
    this.http.get(this.baseURL + 'buggy/badrequest').subscribe(
      {
        next: (response) => { console.log(response); },
        error: (e: any) => { console.log(e); },
        complete: () => { console.log('complete'); }
      }
    );
  }

  get400ValidationError(){
    this.http.get(this.baseURL + 'products/five').subscribe(
      {
        next: (response) => { console.log(response); },
        error: (e: any) => {
          //console.log(e.errors);
          this.validationErrors = e.errors; },
        complete: () => { console.log('complete'); }
      }
    );
  }

}
