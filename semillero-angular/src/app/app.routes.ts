import { Routes } from '@angular/router';
//import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent} from './pages/series/series.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
// Make sure the file exists at this path, or update the path if needed
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: '', loadComponent:() => import('./pages/home/home.component').then(m => m.HomeComponent) },

  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: '**', redirectTo: 'login' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] }, // ✅ Protegida
  { path: 'series', component: SeriesComponent ,canActivate: [AuthGuard] }, // ✅ Protegida}, },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // ✅ Protegida },
  { path: 'detalle', component: DetalleComponent, canActivate: [AuthGuard] }, // ✅ Protegida },
  
  
];