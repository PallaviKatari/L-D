import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const authModule = () => import('./auth/auth.module').then(m => m.AuthModule);
const layoutModule = () => import('./layout/layout.module').then(m => m.LayoutModule);

const routes: Routes = [
  { path: 'auth', loadChildren: authModule },
  { path: '', loadChildren: layoutModule },
  { path: '**', redirectTo: 'auth/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
