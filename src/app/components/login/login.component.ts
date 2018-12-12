import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validUser:boolean = true;

  constructor(private router: Router, private dataService:DataService) { }
  ngOnInit() {
  }

  login(data){
    // this.dataService.login(data).subscribe(data => {
    //   if(data['success']){
    //     sessionStorage.setItem('userDetails', data['data']);
    //     this.router.navigateByUrl('/dashboard');
    //   }else{
    //     this.validUser = false;
    //   }
    // });
    if(data['username'] == 'Gawain' && data['password'] == 'Gawain'){
      this.router.navigateByUrl('/dashboard');
    }

  }
}
