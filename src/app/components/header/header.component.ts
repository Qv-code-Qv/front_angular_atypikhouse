import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    window.addEventListener('scroll', function() {
      navbarScroll();
     });
     function navbarScroll() {
       var y = window.scrollY;
       if (y > 10) {
         var header = document.getElementsByClassName('header')[0];
           header.classList.add('small');
     
       } else if (y < 10) {
           var header = document.getElementsByClassName('header')[0];
          header.classList.remove('small');
       }
     }
  }

  

}
