import { Component, OnInit } from '@angular/core';
import { carpets } from '../data/products';

@Component({
  selector: 'app-carpets',
  templateUrl: './carpets.component.html',
  styleUrls: ['./carpets.component.css']
})
export class CarpetsComponent implements OnInit {

  items: any;

  constructor() { 
    this.items = carpets
  }

  ngOnInit() {
  }

}
