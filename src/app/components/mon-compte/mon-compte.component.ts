import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserEntity } from 'src/app/models/register';



@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
  providers: [UserService]

  
})
export class MonCompteComponent implements OnInit {
  

  params!: any;

  constructor(private readonly userService: UserService, private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }

    user!: IUserEntity;
  
  ngOnInit(): void {
    this.userService.getUser(this.params.email).subscribe((user: IUserEntity) => {
      console.log(user)
      this.user = user
    });
  }
}

  




