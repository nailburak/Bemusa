import { Component, OnInit } from '@angular/core';
declare let $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 3000); // every 3 seconds
  }

}
