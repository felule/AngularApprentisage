import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { uniqueContact } from './validator/contact-unique.validator';
import { nombrePaireValidator } from './validator/nombre-paire.validator';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  // Variable qui sert de receptacle à l'input coté template
  public templateDrivenForm!: string;

  public reactiveForm!: FormGroup;
  public formArray!: FormArray;
  public submite = false;

  /**
   *
   * @param fb Service angular pour générer les objets formgroup et formArray
   */
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Création du form group ainsi que de ses controles
    this.reactiveForm = this.fb.group({
      prenom: new FormControl(),
      // nom de la propriete - premier parametre : valeur initiale
      nom: new FormControl('didier'),
      // Second parametre : les validateurs du champ, ici valeur minimal 0 valeur maximal 120, champ obligatoire, respect d'une regEx
      age: new FormControl(null, [
        Validators.min(0),
        Validators.max(120),
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),

      nombrePaire: new FormControl(null, [
        nombrePaireValidator('je suis nombre paire validator'),
      ]),
    });

    this.formArray = this.fb.array([], uniqueContact());
    this.addContact();

    // Il est possible de manipuler chaque controle du formulaire
    this.reactiveForm.get('prenom')?.setValue('leGrannd');
    // Lors que l'on manipule des controles il est judicieux de mettre à jours le controle via la methode updateValueAndValidity
    this.reactiveForm.get('prenom')?.updateValueAndValidity();
  }

  onSubmit() {
    console.log('Je submite');
    this.submite = !this.submite;
  }

  addContact(): void {
    this.formArray.push(
      this.fb.group({
        nom: new FormControl(),
        telephone: new FormControl(null, [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      })
    );
  }

  removeContact(index: number): void {
    this.formArray.removeAt(index);
  }

  // methode de cast pour permettre la reconnaissance des formgroup du form array dans le template
  asFormGroup(fromGroup: AbstractControl): FormGroup {
    return fromGroup as FormGroup;
  }
}
