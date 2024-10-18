import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Demo01Component } from './components/demos/demo01/demo01.component';
import { Demo02Component } from './components/demos/demo02/demo02.component';
import { Demo03Component } from './components/demos/demo03/demo03.component';
import { Demo04Component } from './components/demos/demo04/demo04.component';
import { Demo05Component } from './components/demos/demo05/demo05.component';
import { Demo06Component } from './components/demos/demo06/demo06.component';
import { Demo07Component } from './components/demos/demo07/demo07.component';
import { Demo08Component } from './components/demos/demo08/demo08.component';
import { Demo09Component } from './components/demos/demo09/demo09.component';
import { Demo10Component } from './components/demos/demo10/demo10.component';
import { Demo11Component } from './components/demos/demo11/demo11.component';
import { Demo12Component } from './components/demos/demo12/demo12.component';
import { Demo13Component } from './components/demos/demo13/demo13.component';
import { Demo14Component } from './components/demos/demo14/demo14.component';
import { Demo15Component } from './components/demos/demo15/demo15.component';
import { Demo16Component } from './components/demos/demo16/demo16.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'demo01', component: Demo01Component},
    {path: 'demo02', component: Demo02Component},
    {path: 'demo03', component: Demo03Component},
    {path: 'demo04', component: Demo04Component},
    {path: 'demo05', component: Demo05Component},
    {path: 'demo06', component: Demo06Component},
    {path: 'demo07', component: Demo07Component},
    {path: 'demo08', component: Demo08Component},
    {path: 'demo09', component: Demo09Component},
    {path: 'demo10', component: Demo10Component},
    {path: 'demo11', component: Demo11Component},
    {path: 'demo12', component: Demo12Component},
    {path: 'demo13', component: Demo13Component},
    {path: 'demo14', component: Demo14Component},
    {path: 'demo15', component: Demo15Component},
    {path: 'demo16', component: Demo16Component},
    {path: 'routage', component: Demo16Component},
    {path: 'routage/:id', component: Demo16Component}
];
