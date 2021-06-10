import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  //isUserAuthenticated() {
  //  const token = localStorage.getItem("jwt");
  //  //const token: string = JSON.parse(localStorage.getItem("jwt")!);
  //  if (token) {
  //    return true;
  //  }
  //  else {
  //    return false;
  //  }
  //}

  //public logOut = () => {
  //  localStorage.removeItem("jwt");
  //}

  ngOnInit(): void {
  }

}
