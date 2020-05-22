import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routingapp/app.home.component';
import { AboutComponent } from './routingapp/app.about.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { ProductComponent } from './components/productcompopnent/app.product.component';

// the route table
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent,
     children: [
        {
          path: 'product', component: ProductComponent
        }
     ]},
  {path: 'contact/:id', component: ContactComponent},
  // lazy loading od module
  {path: 'lazy', loadChildren:()=>import('./../lib/module/app.lazy.module').then(m=>m.LazyModule) },
  {path: '**', redirectTo: ''} // redirect to default home
];

@NgModule({
  // the RouterModule.forRoot(routes) line will register the
  // route table at the root of the application
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
