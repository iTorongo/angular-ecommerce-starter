import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './core/enums/routes.enum';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: AppRoutes.HOME,
    title: 'Home',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./features/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: AppRoutes.PRODUCTS,
    title: 'Products',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./features/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: AppRoutes.FIND_STORE,
    title: 'Find store',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./features/find-store/find-store.module').then(
        (module) => module.FindStoreModule
      ),
  },
  {
    path: AppRoutes.CART,
    title: 'Cart',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./features/cart/cart.module').then((module) => module.CartModule),
  },
  {
    path: AppRoutes.NOT_FOUND,
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
