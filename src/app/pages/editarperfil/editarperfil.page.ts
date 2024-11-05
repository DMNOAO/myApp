import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  editProfileForm: FormGroup= this.fb.group({});
  username: string | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    // Crear el formulario con validaciones
    this.editProfileForm = this.fb.group({
      username: ['', Validators.required],      // Nombre de usuario obligatorio
      firstName: ['', Validators.required],      // Nombre obligatorio
      lastName: ['', Validators.required],       // Apellido obligatorio
      educationLevel: ['', Validators.required], // Nivel de educación obligatorio
      birthDate: ['', Validators.required]       // Fecha de nacimiento obligatoria
    });

    // Obtener el nombre de usuario de la navegación y establecerlo en el formulario si está disponible
    const state = this.router.getCurrentNavigation()?.extras.state as { username: string };
    if (state?.username) {
      this.username = state.username;
      this.editProfileForm.patchValue({ username: this.username });
      console.log('Usuario recibido en EditarPerfil:', this.username);
    }
  }

  // Navegación a otras páginas
  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  // Método para mostrar los datos del perfil en una alerta
  async showProfileData() {
    if (this.editProfileForm.valid) {  // Verifica que el formulario sea válido
      const alert = await this.alertCtrl.create({
        header: 'Datos del Perfil',
        message: `
          Nombre de Usuario: ${this.editProfileForm.get('username')?.value} <br>
          Nombre: ${this.editProfileForm.get('firstName')?.value} <br>
          Apellido: ${this.editProfileForm.get('lastName')?.value} <br>
          Nivel de Educación: ${this.editProfileForm.get('educationLevel')?.value} <br>
          Fecha de Nacimiento: ${this.editProfileForm.get('birthDate')?.value}
        `,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      // Muestra una alerta si el formulario no está completo
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos obligatorios.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  // Método para limpiar el formulario y aplicar una animación
  clearForm() {
    this.editProfileForm.reset();
    this.animateInputs();
  }

  // Método para animar los campos de entrada: username, firstName, y lastName
  animateInputs() {
    const usernameEl = document.getElementById('username');
    const firstNameEl = document.getElementById('firstName');
    const lastNameEl = document.getElementById('lastName');

    if (usernameEl && firstNameEl && lastNameEl) {
      const animation = this.animationCtrl
        .create()
        .addElement(usernameEl)
        .addElement(firstNameEl)
        .addElement(lastNameEl)
        .duration(1000)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
      animation.play();
    }
  }

  // Método para cerrar sesión (puedes agregar la lógica de autenticación aquí)
  cerrarSesion() {
    console.log('Cerrando sesión');
    this.router.navigate(['login']);
  }
}
