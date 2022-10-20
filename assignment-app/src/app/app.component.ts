import { Component, ViewChild } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AuthentificationComponent } from './assignments/authentification/authentification.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion de devoir à rendre';
  opened=false;  
  @ViewChild("myslide") myslide!: MatSlideToggle;
  constructor(private authService:AuthService, private router:Router, public dialog: MatDialog) { }
  connected = this.authService.loggedIn;

  logout(){
    if(this.authService.loggedIn){
      console.log("logout");
      this.authService.logOut();
      this.router.navigate(['/home']);
      return this.connected;
    }
    else{
      this.dialog.open(AuthentificationComponent, {
        width: 'auto', height: 'auto',
        data: {name: '', password: ''}
    });
      return this.connected;
    }
  }

  isLoggedIn(){
    //console.log("Slide check : "+this.myslide.checked);
    return this.authService.loggedIn;
  }
  coDeco(){
    if(this.isLoggedIn()){
      return "Connexion"
    } else {
      return "Déconnexion"
    } 
  }
}
