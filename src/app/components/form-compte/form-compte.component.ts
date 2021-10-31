import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-form-compte',
  templateUrl: './form-compte.component.html',
  styleUrls: ['./form-compte.component.scss']
})
export class FormCompteComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder,private readonly router: Router, private readonly route: ActivatedRoute, private readonly authService: AuthService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.email]],
      firstName: ['', [Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      lastName: ['', [Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      address: ['', [Validators.minLength(5), Validators.maxLength(255)]],
      city: ['', [Validators.minLength(2), Validators.maxLength(255)]],
      zipCode: [null, [Validators.pattern(/^[0-9]{5}$/i)]],
      phoneNumber: [null, [Validators.pattern(/^[0-9]{10}$/i)]],
      password: [''],
      confirmPassword: [''],
      
    }, { validators: confirmationPassword() });

  }

  /*onSave(formValues: IRegister) {
    // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
    if (this.form.valid) {
      let id = +this.route.snapshot.params.id;
      this.authService.update(formValues, id).subscribe((data) => {
        this.router.navigate(['/home']);
      }, (error) => { console.log(error) });
    }
  }*/

}

/** Permet de vérifier que le password et le confirmPassword sont identiques */
export function confirmationPassword(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    // Si password ET confirmPassword est identique, alors on envoie un objet d'erreur, sinon on renvoie null
    return form.get('password')?.value !== form.get('confirmPassword')?.value ? {
      confirmationPassword:
      {
        password: form.get('password')?.value,
        confirmPassword: form.get('confirmPassword')?.value
      }
    } : null;
  };
}
