import { Component, OnInit } from '@angular/core';
import {MainService} from '../service/main.service';
import {CharityModel} from "../model/charity.model";

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss']
})
export class CharityListComponent implements OnInit {
  charities: CharityModel[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getCharityList().subscribe(data => {
      this.charities = data;
      console.log(this.charities);
    });
  }

  test() {
    console.log('1');
  }

  test1() {
    console.log('2');
  }

}
