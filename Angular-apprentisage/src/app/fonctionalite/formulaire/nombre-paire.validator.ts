import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Le validator à pour but de retourner une erreur si la valeur n'est pas un nombre paire
 * @param exempleParam on peu passer des informations en paramètre d'un validateur
 * @returns : l'erreur ou null
 */
export function nombrePaireValidator(exempleParam: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log(exempleParam);

        if(!control.value)
            return null;
        
        if(typeof control.value !== 'number')
            return {'notANumber' : true}
        
      return control.value % 2 === 0 ? null : {'notPair': true};
    };
  }