import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage  {

  constructor(private router: Router) {}

     go1(){
       this.router.navigate(['invitee']);  
         }
  

}
