import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Demo01Component } from './components/demos/demo01/demo01.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'demo01', component: Demo01Component}
];
