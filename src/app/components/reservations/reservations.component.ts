import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHousesEntity } from 'src/app/models/houses';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {


  constructor(private readonly route: ActivatedRoute, private readonly housesService: HousesService) { }

  house!: IHousesEntity;


  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    let id = Number(this.route.snapshot.params.id);
    this.housesService.getHouse(id).subscribe((house: IHousesEntity) => {
      console.log(house)
      this.house = house
    });
  }
}
