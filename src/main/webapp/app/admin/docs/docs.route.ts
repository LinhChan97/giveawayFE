import { Route } from '@angular/router';

import { TestDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: 'docs',
  component: TestDocsComponent,
  data: {
    pageTitle: 'global.menu.admin.apidocs'
  }
};
