import { Component, Input, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { IHousesEntity } from 'src/app/models/houses';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hebergement-listing',
  templateUrl: './hebergement-listing.component.html',
  styleUrls: ['./hebergement-listing.component.scss'],
  providers: [HousesService]


})
export class HebergementListingComponent implements OnInit {
  @Input() house!: IHousesEntity;

  constructor(private readonly router: Router) {}
  
  ngOnInit(): void {}

  selectHouse(house: IHousesEntity) {
    this.router.navigate(['/house', house.id]);
  }

}

