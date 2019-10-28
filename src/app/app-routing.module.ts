import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPostResolver } from './core/resolvers/find-post.resolver';
import { HomeComponent } from './modules/home/home.component';


/**
 * Definción de rutas existentes en la aplicación
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./modules/post/post.module').then(mod => mod.PostModule)
  },
  {
    path: 'busqueda/:palabra',
    loadChildren: () => import('./modules/busqueda/busqueda.module').then(mod => mod.BusquedaModule),
    resolve: { posts: FindPostResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers:[
    FindPostResolver
  ]
})
export class AppRoutingModule { }
