import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './features/landing/components';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'visualisation', loadChildren: './features/visualisation/visualisation.module#VisualisationModule' },
  { path: 'reporting', loadChildren: './features/reporting/reporting.module#ReportingModule' },
  { path: 'authentification', loadChildren: './features/authentification/authentification.module#AuthentificationModule' },
  { path: 'disposition', loadChildren: './features/disposition/disposition.module#DispositionModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
