import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { BodyPartPageComponent } from './pages/body-part/body-part.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'body/:part', component: BodyPartPageComponent },
  { path: '**', redirectTo: '' }
];
