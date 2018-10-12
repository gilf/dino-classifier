import { Routes } from '@angular/router';
import { DinosPageComponent } from './dinos-page/dinos-page.component';
import { DinoPageComponent } from './dino-page/dino-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dinos', pathMatch: 'full' },
  { path: 'dinos', component: DinosPageComponent },
  { path: 'dino/:index', component: DinoPageComponent },
  { path: '**', component: PageNotFoundComponent }
];
