import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
    });
  }


  onSave(formValues: ILogin) {
    const obj = {
      email: formValues.email,

    }

    // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
    if (this.form.valid) {
      this.authService.login(formValues).subscribe((tokenValue) => {
        sessionStorage.setItem('token', `Bearer ${tokenValue.token}`);
        sessionStorage.setItem('userEmail', this.form.value.email);

        this.router.navigate([`/dashboard/mon-compte/${sessionStorage.getItem('userEmail')}`, obj]);
      }, (error) => { console.log(error) });
    }





  }


}
