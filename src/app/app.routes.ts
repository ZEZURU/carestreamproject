import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path:'',component: LayoutComponent,
    children:[{path: '',component:HomepageComponent},
    {path: 'aboutus', component:AboutusComponent},
    {path: 'clients', component:ClientsComponent},
    {path: 'contactus', component:ContactusComponent},
    {path: 'services', component:ServicesComponent},]
  },

  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},


  // {path:'',component:SidenavComponent,
  //   children:[{path:'',component:}]
  // }
];
