import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/auth.guard';
import { BufferDetailsComponent } from './buffer-details/buffer-details.component';
import { ShadowDetailsComponent } from './shadow-details/shadow-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buffer-details', component: BufferDetailsComponent },
  { path: 'shadow-details', component: ShadowDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LdRoutingModule { }
