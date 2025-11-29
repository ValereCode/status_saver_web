import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'StatusSaver - Save WhatsApp Statuses Instantly & Securely'
  },
  {
    path: 'privacy',
    component: Privacy,
    title: 'Privacy Policy - StatusSaver'
  }
];
