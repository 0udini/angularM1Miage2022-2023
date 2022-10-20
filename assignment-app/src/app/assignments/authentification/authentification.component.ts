import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../shared/auth.service';
import { Credential } from 'src/app/shared/credential.model';
import { LoggingService } from 'src/app/shared/logging.service';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService:AuthService,private log:LoggingService) { }

  pseudo:string = '';
  mdp:string = '';

  ngOnInit(): void {
  }
  onClickAuth(){
    const cred = new Credential();
    cred.name = this.pseudo;
    cred.password = this.mdp;
    this.log.logCred(cred.name,cred.password);
    this.log.logTest("tryToLogIn in AuthentificationComponent",this.authService.tryToLogIn(cred));
    if(this.authService.tryToLogIn(cred)){
      this.authService.logIn();
      this.log.logTest("logged in ? ",this.authService.loggedIn);
    }else{
      this.mdp = '';
    }
  }

}
