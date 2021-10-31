import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISearch } from 'src/app/models/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup;



  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.createForm();
  }
  // mise en place des validateurs
  createForm() {
    this.form = this.fb.group({
      dateTo: ['', Validators.required],
      dateFrom: ['', Validators.required],
      nbPerson: ['', [Validators.required, Validators.min(1)]],
      nbChildren: [''],
      city: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSave(formValues: ISearch) {
    // de quoi à besoin quentin pour effectuer sa requête
    // http://127.0.0.1:8000/api/houses?city=Paris&dateFin[after]=2018-03-19&nbbeds[gte]=3
    // 
    const date = new Date(formValues.dateTo);
    const obj = {
      city: formValues.city,
      dateFin: `${date.getUTCFullYear()}-${date.getUTCDate()}-${date.getUTCDay()}`, // "Sat Sep 18 2021 00:00:00 GMT+0200 (heure d’été d’Europe centrale)" en "2021-09-18"
      nbbeds: formValues.nbPerson + formValues.nbChildren,
    }

    if (this.form.valid) {
      this.router.navigate(['hebergement', obj]);
    }
  }
}