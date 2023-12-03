import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FolletosComponent } from './components/folletos/folletos.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'folletos', component: FolletosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
