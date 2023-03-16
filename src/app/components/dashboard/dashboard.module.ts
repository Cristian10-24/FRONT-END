import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { VentasComponent } from './componentes/ventas/ventas.component';


@NgModule({
  declarations: [
    TablaComponent,
    PanelComponent,
    PedidosComponent,
    ProductosComponent,
    UsuariosComponent,
    VentasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
