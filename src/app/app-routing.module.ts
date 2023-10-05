import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '/',
    title: 'Home',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./features/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: '404',
    title: 'Not found',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./features/page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
