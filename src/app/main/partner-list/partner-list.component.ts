import { Component, OnInit } from '@angular/core';
import {MainService} from '../service/main.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getPartnerList().subscribe(data => {
      console.log(data);
    })
  }

}
