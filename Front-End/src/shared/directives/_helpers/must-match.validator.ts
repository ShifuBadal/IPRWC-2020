import { FormGroup } from '@angular/forms'

export function MustMatch(firstName: string, secondName: string) {
    return(formGroup: FormGroup) => {
        const first = formGroup.controls[firstName];
        const second = formGroup.controls[secondName];
        
        // Returns null if the above thhhings arent initialized
        if(!first || !second) {
            return null;
        }

        // Returns null if other validator already found error
        if(second.errors && !second.errors.mustMatch) {
            return null;
        }

        // Set error if the validation failed
        if(first.value !== second.value) {
            second.setErrors({mustMatch: true});
        } else {
            second.setErrors(null);
        }
    }
}