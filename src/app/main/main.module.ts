import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharityListComponent } from './charity-list/charity-list.component';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { MainService } from './service/main.service';
import { MainComponent } from './main/main.component';
import { mainRoutes } from './main.route';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { FourStepComponent } from './four-step/four-step.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MainComponent, CharityListComponent, PartnerListComponent, CarouselComponent, FourStepComponent, RegisterEventComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}
