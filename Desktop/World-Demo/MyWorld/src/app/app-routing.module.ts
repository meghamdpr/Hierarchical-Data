import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddregionComponent } from './addregion/addregion.component';
import { ContinentchildrenComponent } from './continentchildren/continentchildren.component';
import { DeleteComponent } from './delete/delete.component';
import { WorldComponent } from './world/world.component';
import { WorldchildrenComponent } from './worldchildren/worldchildren.component';

const routes: Routes = [
  {path:'',component:WorldComponent},
  {path:'World',component:WorldchildrenComponent,
   children:[
     {path:'countries',component:ContinentchildrenComponent}
   ]
  },
  {path:'AddRegion',component:AddregionComponent},
  {path:'DeleteRegion',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
