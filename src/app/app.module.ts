import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent, FirstComponent, SecondComponent, ProductsPageComponent, ProductsTableComponent, MyFirstPipe, ProductDetailsComponent, RandomUsersPageComponent, UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
