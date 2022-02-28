import { BaseAngularRoutingModule } from './base-angular-routing.module';
import { BaseAngularComponent } from './base-angular.component';
import { NgModule } from '@angular/core';
import { ComposantComponent } from './composants/composant.component';
import { FilsComponent } from './composants/fils/fils.component';

@NgModule({
  declarations: [
    BaseAngularComponent,
    ComposantComponent,
    FilsComponent,
  ],
  imports: [
    BaseAngularRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class BaseAngularModule { }
