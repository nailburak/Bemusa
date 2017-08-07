import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CarpetsComponent } from './carpets/carpets.component';
import { SofaSetComponent } from './sofa-set/sofa-set.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent, 
    children: [
      { path: '', redirectTo: 'carpets', pathMatch: 'full' },
      { path: 'carpets', component: CarpetsComponent },
      { path: 'sofa-set', component: SofaSetComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactComponent,
    CarpetsComponent,
    SofaSetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
