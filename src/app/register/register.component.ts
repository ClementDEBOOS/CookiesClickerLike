import { Component, OnInit } from '@angular/core';
import {Credentials, User} from '../user';
import {CoockiesService} from '../services/coockies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: Credentials = {
    mail: '',
    pwd: ''
  };
  user: User = {
    credentials: this.credentials,
    phone: '',
    name: '',
    id: '',
    token: ''
  };
  constructor() { }

  ngOnInit() {
  }

  sendRegister(ngForm) {
    ngForm = ngForm.trim();

    console.log('FORM', ngForm);
  }
}
