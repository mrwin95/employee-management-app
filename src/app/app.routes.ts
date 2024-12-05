import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'master',
    title: 'Master',
    component: MasterComponent,
  },
  {
    path: 'employee',
    title: 'Employee',
    component: EmployeeComponent,
  },
  {
    path: 'client',
    title: 'Client',
    component: ClientComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ClientComponent,
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: PageNotFoundComponent,
  },
];
