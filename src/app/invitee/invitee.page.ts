import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-invitee',
  templateUrl: './invitee.page.html',
  styleUrls: ['./invitee.page.scss'],
})
export class InviteePage  {

  constructor(private router: Router) {}
  
  add() {
    this.router.navigate(['participants']);
  }
  
  }


