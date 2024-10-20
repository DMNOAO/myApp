import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string ='';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    // Aquí puedes añadir la lógica de autenticación
    if (this.email === 'usuario@ejemplo.com' && this.password === '123456') {
      // Redirigir al usuario a la página principal si el login es correcto
      this.navCtrl.navigateForward('/home');
    } else {
      // Mostrar mensaje de error (esto es solo un ejemplo)
      alert('Credenciales incorrectas');
    }
  }
  // Función para navegar a la página Home
  goToHome() {
    this.navCtrl.navigateBack('/home');
  }
}
