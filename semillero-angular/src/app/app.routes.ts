import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent} from './pages/series/series.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'detalle', component: DetalleComponent },
];
