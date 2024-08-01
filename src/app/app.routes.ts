import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HeaderComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "header",
        component: HeaderComponent
    }
];
