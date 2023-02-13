import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './component/items/items.component';
import { AdditemComponent } from './component/additem/additem.component';


const routes: Routes = [
{
  path:'',
  component: ItemsComponent
},
{
  path:'add',
  component: AdditemComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
