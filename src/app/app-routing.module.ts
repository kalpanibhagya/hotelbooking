import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: 'accomodation', component: AccomodationComponent},
    { path: 'celebrations', component: CelebrationsComponent},
    { path: 'weddings', component: WeddingsComponent},
    { path: 'lifestyle', component: LifestyleComponent},
    { path: 'offers', component: OffersComponent},
    { path: 'food-beverage', component: FoodBeverageComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: '', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
