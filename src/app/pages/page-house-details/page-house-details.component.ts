import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { IHousesEntity } from 'src/app/models/houses';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-page-house-details',
  templateUrl: './page-house-details.component.html',
  styleUrls: ['./page-house-details.component.scss']
})
export class PageHouseDetailsComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute, private readonly housesService: HousesService) { }
  
  house!: IHousesEntity;

  // --- "click"
  // --- link => "houses/:id" PageHouseDetailsComponent
  // --- let id = +this.route.snapshot.params.id
  // --- getHouse 
  // --- ? 

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    let id = Number(this.route.snapshot.params.id);
    this.housesService.getHouse(id).subscribe((house: IHousesEntity) => {
      console.log(house)
      this.house = house
    });
  }

}