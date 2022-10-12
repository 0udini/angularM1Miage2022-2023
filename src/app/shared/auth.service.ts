import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Credential{
  name!:string;
  password!:string;
 }

export class AuthService {
  loggedIn = false;
  credentialList:Credential[] = [
    {name:"admin", password:'admin'},
    {name:"Garbis", password:'123456'}
  ]
  
  tryToLogIn(creds:Credential){
    if (this.credentialList.some(credential => credential === creds)) {
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

  constructor() { }
}
