import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogfeedComponent } from './blogfeed/blogfeed.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomepageComponent },
  { path:'blogfeed', component:BlogfeedComponent},
  { path:'Login' , component:LoginpageComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
