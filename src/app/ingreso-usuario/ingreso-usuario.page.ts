import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage {
  username: string = '';
  password: string = '';

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {}

  async login() {
    if (this.username.trim() && this.password.trim()) {
      // Aquí puedes implementar la lógica para validar el usuario y la contraseña
      console.log('Usuario y contraseña ingresados correctamente');

      // Redirigir a la página de login
      this.navCtrl.navigateBack('/login');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor ingresa tu nombre de usuario y contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
