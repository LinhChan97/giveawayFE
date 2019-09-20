import { NgModule } from '@angular/core';

import { GiveawaySharedLibsModule, FindLanguageFromKeyPipe, TestAlertComponent, TestAlertErrorComponent } from './';

@NgModule({
  imports: [GiveawaySharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, TestAlertComponent, TestAlertErrorComponent],
  exports: [GiveawaySharedLibsModule, FindLanguageFromKeyPipe, TestAlertComponent, TestAlertErrorComponent]
})
export class GiveawaySharedCommonModule {}
