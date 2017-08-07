import { Component, OnInit } from '@angular/core';
import { sofaSet } from '../data/products';

@Component({
  selector: 'app-sofa-set',
  templateUrl: './sofa-set.component.html',
  styleUrls: ['./sofa-set.component.css']
})
export class SofaSetComponent implements OnInit {

  items: any;

  constructor() { 
    this.items = sofaSet
  }

  ngOnInit() {
  }

}
