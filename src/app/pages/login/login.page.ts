import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private images: string[] = [
    '/assets/Ira-del-Nahual.jpg', // Verifica el nombre de archivo
    '/assets/Odin.jpg',
    '/assets/Zeus.jpg',
    '/assets/Merlin.jpg'
  ];
  private currentIndex: number = 0;
  private intervalId: any; // Agregado para almacenar el ID del intervalo

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{4}$')],
      ],
    });
  }

  ngOnInit() {
    this.changeBackground();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log("Redirigiendo...");
      const navigationExtras: NavigationExtras = {
        state: { email: this.email?.value },
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      console.log("Formulario inválido");
    }
  }

  changeBackground() {
    const backgroundElement = document.querySelector('.background-slideshow') as HTMLElement;
    if (backgroundElement) {
        this.intervalId = setInterval(() => {
            backgroundElement.style.backgroundImage = `url(${this.images[this.currentIndex]})`;
            backgroundElement.style.backgroundSize = 'cover';
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 5000);
    } else {
        console.log("El elemento de fondo no se encontró");
    }
}


  ngOnDestroy() {
    clearInterval(this.intervalId); // Limpiar el intervalo al destruir el componente
  }
}
