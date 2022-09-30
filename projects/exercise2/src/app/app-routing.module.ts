import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './../../service/auth-guard.service';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./../module/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'secure',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./../module/secure/secure.module').then(m => m.SecureModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
