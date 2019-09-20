import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { GiveawaySharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
  adminState,
  AuditsComponent,
  LogsComponent,
  TestMetricsMonitoringComponent,
  TestHealthModalComponent,
  TestHealthCheckComponent,
  TestConfigurationComponent,
  TestDocsComponent
} from './';

@NgModule({
  imports: [
    GiveawaySharedModule,
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild(adminState)
  ],
  declarations: [
    AuditsComponent,
    LogsComponent,
    TestConfigurationComponent,
    TestHealthCheckComponent,
    TestHealthModalComponent,
    TestDocsComponent,
    TestMetricsMonitoringComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  entryComponents: [TestHealthModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GiveawayAdminModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
