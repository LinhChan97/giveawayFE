import { Component, OnInit } from '@angular/core';
import {MainService} from '../service/main.service';
import {PartnerModel} from "../model/partner.model";

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {
  partners: PartnerModel[]

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getPartnerList().subscribe(data => {
      // console.log(data);
      this.partners = data.slice(0, 8);
      // console.log(this.partners);
      // this.partners = data;
    })
  }

}
