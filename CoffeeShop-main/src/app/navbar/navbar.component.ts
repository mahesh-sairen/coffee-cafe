import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private _http:HttpClient) { }

  ngOnInit() {
  }
  loggedIn(){
    
    return this._http.get<any>("http://localhost:3000/signup")
 
   }
   Loggedout(){
     this.router.navigate(['login']);
   }
}
