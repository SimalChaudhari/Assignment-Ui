import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  // {path: 'subscription'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
