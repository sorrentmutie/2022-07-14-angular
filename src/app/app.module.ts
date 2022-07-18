import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/first/first.component';
import { SecondComponent } from './shared/second/second.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';
import { MyFirstPipe } from './products/pipes/my-first.pipe';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { RandomUsersPageComponent } from './randomusers/pages/random-users-page/random-users-page.component';
import { UserCardComponent } from './randomusers/components/user-card/user-card.component';
import { ReqResPageComponent } from './reqres/pages/req-res-page/req-res-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { FirstInterceptor } from './core/interceptors/first.interceptor';
import { SecondInterceptor } from './core/interceptors/second.interceptor';


@NgModule({
  declarations: [
    AppComponent, FirstComponent, SecondComponent, ProductsPageComponent, ProductsTableComponent, MyFirstPipe, ProductDetailsComponent, RandomUsersPageComponent, UserCardComponent, ReqResPageComponent, NotFoundComponent, WelcomeComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
   { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
