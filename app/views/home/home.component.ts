import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "home",
  template: `
    <div>
      <h1>Home</h1>
      <h3>Total users: # {{ users?.length }}</h3>
    </div>
    <iframe
      src="http://localhost"
      title="W3Schools Free Online Web Tutorials"
      style="height: 600px; width: 400px"
    ></iframe>
  `
})
export class HomeViewComponent {
  users;

  constructor(private http: Http) {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .map(res => res.json())
      .subscribe(res => (this.users = res));
  }
}
