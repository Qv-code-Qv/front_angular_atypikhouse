import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IContact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})


export class FormContactComponent implements OnInit {
  
  form!: FormGroup;
 

  constructor(private fb: FormBuilder, private readonly contactService: ContactService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-z\s+a-z+ÖØ-öø-ÿ]+$/i)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    });


  }

  onSave(formValues: IContact) {
    // Si le form est valide : alors on doit démarrer le stcokage dans la base de données. *
    if (this.form.valid) {
      this.contactService.contact(formValues).subscribe((data) => {
        /*this.router.navigate(['/home']);*/
      }, (error) => { console.log(error) });
    }
  }

}