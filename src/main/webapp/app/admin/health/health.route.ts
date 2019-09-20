import { Route } from '@angular/router';

import { TestHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: 'test-health',
  component: TestHealthCheckComponent,
  data: {
    pageTitle: 'health.title'
  }
};
