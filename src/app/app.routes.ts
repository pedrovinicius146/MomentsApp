import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NewMomentComponent } from './pages/new-moment/new-moment.component';
export const routes: Routes = [
{path: '',component:HomeComponent},
{path: 'about',component:AboutComponent},
{path: 'moments/new', component: NewMomentComponent}
];
