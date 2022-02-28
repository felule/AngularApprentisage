import { ModelComponent } from './models/model.component';
import { ComposantComponent } from './composants/composant.component';
import { BaseAngularComponent } from './base-angular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: BaseAngularComponent
  },
  {
    path: 'composant',
    component: ComposantComponent
  },
  {
    path: 'model',
    component: ModelComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseAngularRoutingModule { }
