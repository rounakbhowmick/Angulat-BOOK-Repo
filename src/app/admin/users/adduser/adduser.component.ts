import { User } from './../../../model/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user: User
  constructor() { }

  ngOnInit(): void {
  }

}
