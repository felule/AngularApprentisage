import { BaseAngularRoutingModule } from './base-angular-routing.module';
import { BaseAngularComponent } from './base-angular.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BaseAngularComponent
  ],
  imports: [
    BaseAngularRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class BaseAngularModule { }
