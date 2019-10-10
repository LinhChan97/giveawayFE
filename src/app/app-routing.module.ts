import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    // loadChildren:  () => import('./main/main.module').then(m => m.MainModule),
    data: { animation: 'main' }
  },
  // {
  //   path: 'charity',
  //   loadChildren: './users/users.module#UsersModule',
  //   data: { animation: 'main' }
  // },
  // {
  //   path: 'employer',
  //   loadChildren: './noways/noways.module#NowaysModule',
  //   data: { animation: 'main' }
  // },
  // {
  //   path: 'how-it-work',
  //   loadChildren: './services/services.module#ServicesModule',
  //   data: { animation: 'main' }
  // },
  // {
  //   path: 'about-us',
  //   loadChildren: './notifications/notifications.module#NotificationsModule',
  //   data: { animation: 'main' }
  // },
  // {
  //   path: 'live-event',
  //   loadChildren: './associations/associations.module#AssociationsModule',
  //   data: { animation: 'main' }
  // },
  // {
  //   path: 'start-event',
  //   loadChildren: './associations/associations.module#AssociationsModule',
  //   data: { animation: 'main' }
  // },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
