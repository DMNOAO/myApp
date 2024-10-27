import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string | undefined;
  homeForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private animationCtrl: AnimationController
  ) {
    // Crear formulario con los campos
    this.homeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      educationLevel: [''],
      birthDate: [''],
    });
  }

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state as { username: string };
    if (state?.username) {
      this.username = state.username;
      console.log('Usuario recibido en Home:', this.username); // Verificación en consola
    }
  }
  
  // Método para limpiar el formulario
  clearForm() {
    this.homeForm.reset();
    this.animateInputs();
  }

  // Método para mostrar los datos en una alerta
  async showData() {
    const alert = await this.alertCtrl.create({
      header: 'Datos Ingresados',
      message: `
        Nombre: ${this.homeForm.get('firstName')?.value}  
        Apellido: ${this.homeForm.get('lastName')?.value} 
       
      `,
      buttons: ['OK'],
    });
    await alert.present();
  }
  

  // Animación para inputs de nombre y apellido
  animateInputs() {
    const firstNameEl = document.getElementById('firstName');
    const lastNameEl = document.getElementById('lastName');
  
    if (firstNameEl && lastNameEl) {
      const animation = this.animationCtrl
        .create()
        .addElement(firstNameEl)
        .addElement(lastNameEl)
        .duration(1000)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
      animation.play();
    }
  }
}
