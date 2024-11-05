import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tucoleccion',
  templateUrl: './tucoleccion.page.html',
  styleUrls: ['./tucoleccion.page.scss'],
})
export class TucoleccionPage implements OnInit {
  selectedItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Recupera los ítems seleccionados desde el estado de navegación
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { selectedItems: any[] };
    this.selectedItems = state?.selectedItems || [];
  }

  // Navegación a otras páginas
  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  // Método para cerrar sesión (puedes agregar la lógica de autenticación aquí)
  cerrarSesion() {
    // Implementa la lógica de cierre de sesión aquí
    console.log('Cerrando sesión');
    this.router.navigate(['login']);
  }
}
