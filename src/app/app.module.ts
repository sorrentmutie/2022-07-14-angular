import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
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
import { HeroFormComponent } from './hero-form/components/hero-form/hero-form.component';
import { ReqResFormComponent } from './reqres/pages/req-res-form/req-res-form.component';
import { GotPageComponent } from './got/components/got-page/got-page.component';
import { ThirdComponent } from './shared/third/third.component';
import { FourthComponent } from './shared/fourth/fourth.component';
import { FirstSubjectComponent } from './subjects/components/first-subject/first-subject.component';
import { EventBusComponent } from './subjects/components/event-bus-component/event-bus-component.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CustomersListComponent } from './subjects/components/customers-list/customers-list.component';
import { ObservableServiceComponent } from './subjects/components/observable-service/observable-service.component';
import { BrowserNotificationComponent } from './shared/browser-notification/browser-notification.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent, FirstComponent, SecondComponent, ProductsPageComponent,
    ProductsTableComponent, MyFirstPipe, ProductDetailsComponent, RandomUsersPageComponent,
    UserCardComponent, ReqResPageComponent, NotFoundComponent, WelcomeComponent, MenuComponent,
    HeroFormComponent, ReqResFormComponent, GotPageComponent, ThirdComponent, FourthComponent,
    FirstSubjectComponent, EventBusComponent, FooterComponent, CustomersListComponent, ObservableServiceComponent, BrowserNotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
   { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
