import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  // Inyecta AlertController en el constructor
  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {}

  async resetPassword() {
    if (this.isValidUsername(this.username)) {
      // Redirige a la página de Ingreso Usuario después de la validación exitosa
      this.navCtrl.navigateRoot('/ingreso-usuario');
    } else {
      // Muestra una alerta si el usuario no es válido
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor ingresa un usuario válido.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  // Valida que el campo de usuario no esté vacío
  isValidUsername(username: string): boolean {
    return username.trim().length > 0;
  }
}
