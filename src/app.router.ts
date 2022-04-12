import { Routes, RouterModule } from '@angular/router'; 


import { AppComponent } from './app/app.component';
import { ContactComponent } from './app/contact/contact.component';
import { HelpComponent } from './app/help/help.component';
import { PhotoGalaryComponent } from './app/photo-galary/photo-galary.component';
import { RegistrationComponent } from './app/registration/registration.component';
import { BlogComponent } from './app/blog/blog.component';
import { MeanComponent } from './app/mean/mean.component';
import { MernComponent } from './app/mern/mern.component';
import { Home1Component } from './app/home1/home1.component';
import { CjavaComponent } from './app/cjava/cjava.component';
import { AjavaComponent } from './app/ajava/ajava.component';

export const router: Routes = [
    { path: '', redirectTo: 'home1', pathMatch: 'full' }, //default page
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },
    { path: 'photo-galary', component: PhotoGalaryComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'blog', component: BlogComponent},
    { path: 'mean', component: MeanComponent},
    { path: 'mern', component: MernComponent},
    { path: 'home1', component: Home1Component},
    { path: 'cjava', component: CjavaComponent},
    { path: 'ajava', component: AjavaComponent}
];

export const routes = RouterModule.forRoot(router);