import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './features/landing/components';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'visualisation', loadChildren: './features/visualisation/visualisation.module#VisualisationModule' },
  { path: 'configuration', loadChildren: './features/configuration/configuration.module#ConfigurationModule' },
  { path: 'reporting', loadChildren: './features/reporting/reporting.module#ReportingModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
