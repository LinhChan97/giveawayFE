import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GiveawaySharedCommonModule, TestLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GiveawaySharedCommonModule],
  declarations: [TestLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [TestLoginModalComponent],
  exports: [GiveawaySharedCommonModule, TestLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GiveawaySharedModule {
  static forRoot() {
    return {
      ngModule: GiveawaySharedModule
    };
  }
}
