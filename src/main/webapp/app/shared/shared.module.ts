import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GiveawaySharedCommonModule, TestLoginModalComponent, HasAnyAuthorityDirective } from './';
import {RegisterComponent} from 'app/core/register/register.component';

@NgModule({
  imports: [GiveawaySharedCommonModule],
  declarations: [TestLoginModalComponent, HasAnyAuthorityDirective, RegisterComponent],
  entryComponents: [TestLoginModalComponent, RegisterComponent],
  exports: [GiveawaySharedCommonModule, TestLoginModalComponent, HasAnyAuthorityDirective, RegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GiveawaySharedModule {
  static forRoot() {
    return {
      ngModule: GiveawaySharedModule
    };
  }
}
