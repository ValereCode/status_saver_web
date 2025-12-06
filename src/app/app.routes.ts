import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';

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
  },
  {
    path: 'terms',
    component: Terms,
    title: 'Terms of Use - StatusSaver'
  }
];
