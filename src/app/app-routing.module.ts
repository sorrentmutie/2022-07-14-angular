import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstGuard } from './core/guards/first.guard';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { RandomUsersPageComponent } from './randomusers/pages/random-users-page/random-users-page.component';
import { ReqResPageComponent } from './reqres/pages/req-res-page/req-res-page.component';
import { FirstComponent } from './shared/first/first.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SecondComponent } from './shared/second/second.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'random', component: RandomUsersPageComponent},
  { path: 'reqres', component: ReqResPageComponent, canActivate: [FirstGuard]},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
