import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function avoidWord(fc:AbstractControl) : ValidationErrors | null{
   let notAllowed = /admin/.test(fc.value);

   if(notAllowed){
    return {
        prohibited: {value: fc.value}
    }
   }
   else{
    return null;
   }
}

export function prohibited(req:RegExp) : ValidatorFn{
    return (fc:AbstractControl) : ValidationErrors | null => {
        let notAllowed = req.test(fc.value);

        if(notAllowed) {
            return {
                prohibited: {value: fc.value}
            };
        }
        else{
            return null;
        }
    }
}

//custom validation is a function (avoidword)
//(fc) represents what user is typing
//validation we use  any word like (hack), thats the word that cannot be used by user typing
//return value 'prohibited' if word (hack) is used
//(notAllowed) is the boolean to return 'true' or 'false'
// return 'null' means user did not type (hack) so no action is taken(validation/message)