import { BaseAngularRoutingModule } from './base-angular-routing.module';
import { BaseAngularComponent } from './base-angular.component';
import { NgModule } from '@angular/core';
import { ComposantComponent } from './composants/composant.component';
import { FilsComponent } from './composants/fils/fils.component';
import { ServicesComponent } from './services/services.component';
import { FilsUnComponent } from './services/fils-un/fils-un.component';

@NgModule({
  declarations: [
    BaseAngularComponent,
    ComposantComponent,
    FilsComponent,
    ServicesComponent,
    FilsUnComponent,
  ],
  imports: [
    BaseAngularRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class BaseAngularModule { }
