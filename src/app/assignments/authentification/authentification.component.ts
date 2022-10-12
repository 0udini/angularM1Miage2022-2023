import { Component, OnInit } from '@angular/core';
import { AuthService, Credential } from '../../shared/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService:AuthService,) { }

  pseudo:string = '';
  mdp:string = '';

  ngOnInit(): void {
  }
  onClickAuth(){
    const cred = new Credential();
    cred.name = this.pseudo;
    cred.password = this.mdp;
    if(this.authService.tryToLogIn(cred)){
      this.authService.logIn();
    }else{
      this.pseudo = '';
    }
  }

}
