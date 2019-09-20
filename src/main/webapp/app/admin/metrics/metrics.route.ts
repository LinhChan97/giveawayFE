import { Route } from '@angular/router';

import { TestMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: 'test-metrics',
  component: TestMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
