import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AccueilComponent } from '../app/components/accueil/accueil.component';
import { TestComponent } from './components/test/test.component';
import { MaladieComponent } from './components/maladie/maladie.component';
import { VaccinComponent } from './components/vaccin/vaccin.component';
import { PreventionComponent } from './components/prevention/prevention.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'maladie', component: MaladieComponent },
  { path: 'vaccin', component: VaccinComponent },
  { path: 'prevention', component: PreventionComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
