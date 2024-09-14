import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Asegúrate de importar LoginPage si es necesario
// import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'ofrecer-viaje',
    loadChildren: () => import('./ofrecer-viaje/ofrecer-viaje.module').then(m => m.OfrecerViajePageModule)
  },
  {
    path: 'buscar-viaje',
    loadChildren: () => import('./buscar-viaje/buscar-viaje.module').then(m => m.BuscarViajePageModule)
  },
  {
    path: 'mis-viajes',
    loadChildren: () => import('./mis-viajes/mis-viajes.module').then(m => m.MisViajesPageModule)
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
