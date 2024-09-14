import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.username = navigation.extras.state['username'];
    }
  }

  ofrecerViaje() {
    // Navegar a la página para ofrecer un viaje
    this.navCtrl.navigateForward('/ofrecer-viaje');
  }

  buscarViaje() {
    // Navegar a la página para buscar un viaje
    this.navCtrl.navigateForward('/buscar-viaje');
  }

  verMisViajes() {
    // Navegar a la página de mis viajes
    this.navCtrl.navigateForward('/mis-viajes');
  }
}