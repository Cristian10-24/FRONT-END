import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { RegistroComponent } from './componentes/registro/registro.component';


@NgModule({
  declarations: [
    IngresarComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
