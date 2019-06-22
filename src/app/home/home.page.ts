import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router: Router){}
  name = new FormControl(''); 
  
  go() {
    this.router.navigate(['registration']);
  };
  
  signin() {
    this.router.navigate(['invitee']);
  };

ngOnInit(){
  this.name = new FormControl('Dayana', Validators.required);
  
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}
}