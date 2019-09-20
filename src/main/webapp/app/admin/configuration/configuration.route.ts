import { Route } from '@angular/router';

import { TestConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: 'test-configuration',
  component: TestConfigurationComponent,
  data: {
    pageTitle: 'configuration.title'
  }
};
