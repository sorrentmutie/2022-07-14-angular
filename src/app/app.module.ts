import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/first/first.component';
import { SecondComponent } from './shared/second/second.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';
import { MyFirstPipe } from './products/pipes/my-first.pipe';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent, FirstComponent, SecondComponent, ProductsPageComponent, ProductsTableComponent, MyFirstPipe, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
