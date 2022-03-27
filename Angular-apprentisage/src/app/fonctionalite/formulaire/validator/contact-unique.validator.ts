import { FormArray, ValidationErrors } from '@angular/forms';

interface Contact {
  nom?: string;
  telephone?: string;
}

/**
 * Controle si il existe des contacts présents plusieurs fois dans le formArray
 * @param exempleParam on peut passer des informations en paramètre d'un validateur
 * @returns : l'erreur ou null
 */
export function uniqueContact(): ValidationErrors {
  return (formArray: FormArray): ValidationErrors | null => {
    console.log('lets go');
    const uniqueSet = new Set<Contact>();
    for (const formGroup of formArray.controls) {
      const contact = {
        nom: formGroup.get('nom')?.value,
        telephone: formGroup.get('telephone')?.value,
      };
      if (addUnique(uniqueSet, contact)) {
        formGroup.setErrors({ duplicatedContact: true });
      } else {
        // Suppression de l'erreur si elle a été corrigée
        delete formGroup?.errors?.['duplicatedContact'];
      }
    }
    return null;
  };
}

/**
 *
 * @param uniqueSet : Set de contact
 * @param contact : contact à ajouter
 * @returns : renvoie true si le contact est ajouté dans le set, false si le contact existe déja dans le set
 */
function addUnique(uniqueSet: Set<Contact>, contact: Contact): boolean {
  for (const contactOfSet of uniqueSet) {
    if (
      contactOfSet.nom === contact.nom &&
      contactOfSet.telephone === contact.telephone
    ) {
      return true;
    }
  }
  uniqueSet.add(contact);
  return false;
}
