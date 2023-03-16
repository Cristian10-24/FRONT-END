import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesComponent } from './componentes/categories/categories.component';
import { AllProductsComponent } from './componentes/all-products/all-products.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
