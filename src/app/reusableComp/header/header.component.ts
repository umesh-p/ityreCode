import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName:string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // let userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    // this.userName = userDetails.username;
  }

  signOut(){
    // sessionStorage.removeItem('userDetails');
    this.router.navigateByUrl('/login');
  }

  }
