import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstGuard } from './core/guards/first.guard';
import { GotPageComponent } from './got/components/got-page/got-page.component';
import { HeroFormComponent } from './hero-form/components/hero-form/hero-form.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { RandomUsersPageComponent } from './randomusers/pages/random-users-page/random-users-page.component';
import { ReqResFormComponent } from './reqres/pages/req-res-form/req-res-form.component';
import { ReqResPageComponent } from './reqres/pages/req-res-page/req-res-page.component';
import { FirstComponent } from './shared/first/first.component';
import { FourthComponent } from './shared/fourth/fourth.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SecondComponent } from './shared/second/second.component';
import { ThirdComponent } from './shared/third/third.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { EventBusComponent } from './subjects/components/event-bus-component/event-bus-component.component';
import { FirstSubjectComponent } from './subjects/components/first-subject/first-subject.component';
import { ObservableServiceComponent } from './subjects/components/observable-service/observable-service.component';

const routes: Routes = [
  { path: 'got', component: GotPageComponent},
  { path: 'first', component: FirstComponent},
  { path: 'hero', component: HeroFormComponent},
  {path: 'subject', component: FirstSubjectComponent},
  {path: 'eventbus', component: EventBusComponent},
  {path: 'observable', component: ObservableServiceComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
  { path: 'fourth', component: FourthComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'random', component: RandomUsersPageComponent},
  { path: 'reqres', component: ReqResPageComponent, canActivate: [FirstGuard]},
  { path: 'reqresform', component: ReqResFormComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'observable', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
