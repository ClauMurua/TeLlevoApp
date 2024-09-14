import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';

  constructor(private navCtrl: NavController) {}

  navegarHome() {
    if (this.username.trim()) {
      // Navegar a la página de home y pasar el nombre de usuario
      this.navCtrl.navigateForward('/home', {
        state: { username: this.username }
      });
    } else {
      console.log('Nombre de usuario vacío');
    }
  }

  navegarReset() {
    // Navegar a la página de restablecimiento de contraseña
    this.navCtrl.navigateForward('/reset-password'); // Redirige a la página de restablecimiento de contraseña
  }

  navegarLogin() {
    // Navegar de vuelta a la página de login
    this.navCtrl.navigateBack('/login');
  }
}
