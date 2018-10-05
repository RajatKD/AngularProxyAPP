import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProxyConfigApp';
  person;

  constructor(private http: HttpClient) {}

  callTestGet(e) {
    e.preventDefault();
    console.log('Im called');
    this.person = this.http.get('/api/testget').subscribe(res => { console.log('got the response'); });
  }

  callApi(e) {
    this.person = this.http.get('/api').subscribe(res => { console.log('api the response'); });
  }

  submitFormJSON(e: any) {
    e.preventDefault();
    console.log('Im called');
    const target = e.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    console.log(`username is : ${username}, password is : ${password}`);

    this.person = this.http.post('/api/login', {'username': username, 'password': password})
    .subscribe(res => { console.log('got the response'); });
  }

  submitForm(e: any) {
    e.preventDefault();
    console.log('Im called');
    const target = e.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const httpParams = new HttpParams();
    httpParams.append('username', username);
    httpParams.append('password', password);

    this.http.post('/api/login', {'username': username, 'password': password}).subscribe(
      data => {
        this.person = JSON.stringify(data);
      },
      error => {
        console.log(JSON.stringify(error.JSON));
      }
    );

    console.log(`username is : ${username}, password is : ${password}`);
  }
}
