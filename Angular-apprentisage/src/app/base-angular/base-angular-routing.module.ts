import { ModuleComponent } from './modules/modules.component';
import { ModelComponent } from './models/model.component';
import { ComposantComponent } from './composants/composant.component';
import { BaseAngularComponent } from './base-angular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';



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
  {
    path: 'service',
    component: ServicesComponent
  },
  {
    path: 'module',
    component: ModuleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseAngularRoutingModule { }
