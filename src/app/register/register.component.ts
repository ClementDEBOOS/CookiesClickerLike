import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {Register} from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register = {
    mail: '',
    pwd: '',
    phone: '',
    name: ''
  }

  constructor() { }

  ngOnInit() {
  }

  sendRegister() {
    console.log(this.register.mail, this.register.pwd);
  }
}
