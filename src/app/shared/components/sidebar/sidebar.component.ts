import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public open: boolean = true;

  public menuItems = [
    { title: "Home", icon: "home", route: '/dashboard' },
    { title: "Usuarios", icon: "layers", route: '/dashboard/users' },
    { title: "Sponsors", icon: "layers", route: '/dashboard/sponsors' },
    // { title: "Contratistas", icon: "people" },
    // { title: "Almacén", icon: "store", route: '/dashboard/warehouse' },
    // { title: "Reportes Almacén", icon: "assessment" },
    // { title: "Solicitud Compra", icon: "shopping_cart" },
    // { title: "Solicitud Almacén", icon: "inventory" },
    // { title: "Pedidos", icon: "shopping_bag" },
    // { title: "Solicitudes", icon: "assignment" },
    // { title: "Devoluciones", icon: "undo" },
    // { title: "Solicitud Caja Chica", icon: "attach_money" },
    // { title: "Explosión Insumos", icon: "science" },
    // { title: "Justificación RH", icon: "work" },
    // { title: "Soporte", icon: "support" },
  ];

  setOpen(){
    this.open = !this.open;
  }
}
