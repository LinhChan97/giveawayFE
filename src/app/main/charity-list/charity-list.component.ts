import { Component, OnInit } from '@angular/core';
import {MainService} from '../service/main.service';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss']
})
export class CharityListComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getCharityList().subscribe(data => {
      console.log(data);
    });
  }

}
