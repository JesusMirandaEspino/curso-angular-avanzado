import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Main', url: ''
        },
        {
          titulo: 'Progress', url: 'progress'
        },
        {
          titulo: 'Grafica', url: 'graphic1'
        },
        {
          titulo: 'Promesas', url: 'promesas'
        },
        {
          titulo: 'Rxjs', url: 'rxjs'
        }
      ]
    }
  ]

  constructor() {
    // code
  }
}
