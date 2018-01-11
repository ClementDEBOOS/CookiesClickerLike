import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    mail: '',
    pwd: ''
  };

  error: any = null;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  sendLogin() {
    console.log(this.login.mail, this.login.pwd);
    // Fonction onchange regex
    if (this.login.mail === 'clement' && this.login.pwd === 'azerty') {
      this.router.navigate(['/home']);
    }else {
      this.error = {
        title: 'Identifiant ou mot de passe incorrecte',
        text: 'Recommencer'
      };
    }
  }
}
