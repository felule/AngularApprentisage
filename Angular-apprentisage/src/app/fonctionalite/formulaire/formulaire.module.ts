import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire.component';

@NgModule({
  declarations: [FormulaireComponent],
  imports: [
    // Module qui décrit les directives nécéssaires pour implémenter le formulaire template driven
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class FormulaireModule {}
