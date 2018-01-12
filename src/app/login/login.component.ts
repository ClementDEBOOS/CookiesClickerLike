import { Component, OnInit } from '@angular/core';
import {Credentials, User} from '../user';
import {Router} from '@angular/router';
import { CoockiesService } from '../services/coockies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credentials: Credentials = {
    mail: '',
    pwd: ''
  }

  error: any = null;

  constructor(private router: Router, private coockiesService: CoockiesService) { }

  ngOnInit() {

  }
  sendLogin() {
    console.log(this.credentials.mail, this.credentials.pwd);

    this.coockiesService.getUsers().subscribe((credentials) => {
     if (credentials.filter( cred => (cred.mail === this.credentials.mail) && (cred.pwd === this.credentials.pwd)).length > 0) {
       // User valid
       this.router.navigate(['/home']);
       console.log('Valid user');
     } else {
       this.error = {
         title: 'Identifiant ou mot de passe incorrecte',
         text: 'Recommencer'
       };
       console.log('Not valid user');
     }
    });


    /*
    // Fonction onchange regex
    if (this.user.mail === 'clement' && this.user.pwd === 'azerty') {
      this.router.navigate(['/home']);
    }else {
      this.error = {
        title: 'Identifiant ou mot de passe incorrecte',
        text: 'Recommencer'
      };
    }
    */
  }
}
