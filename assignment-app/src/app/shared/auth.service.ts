import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { Credential } from './credential.model';

 @Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private log:LoggingService) { }
  loggedIn = false;

  credentialList:Credential[] = [
    {name:"admin", password:'admin'},
    {name:"Garbis", password:'123456'}
  ]
  
  tryToLogIn(creds:Credential){
   
    if (this.credentialList.some(cred => cred.name === creds.name && cred.password === creds.password)) {
      return true;
    } else {
      return false;
    }
  }

  logIn() {
    this.loggedIn = true; 
  }
  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);}
    );
    return isUserAdmin;
  } 

  
}
