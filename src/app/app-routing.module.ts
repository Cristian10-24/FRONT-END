import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./components/welcome/welcome.module'). then(m => m.WelcomeModule) 
  },
  { path: '',
  loadChildren: () => import('./components/dashboard/dashboard.module'). then(m => m.DashboardModule)
  },

  { path: '',
  loadChildren: () => import('./components/login/login.module'). then(m => m.LoginModule)
  },
  { path: '',
  loadChildren: () => import('./components/about/about.module'). then(m => m.AboutModule)
  },
  { path: '',
  loadChildren: () => import('./components/products/products.module'). then(m => m.ProductsModule)
  },
  { path: '**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
