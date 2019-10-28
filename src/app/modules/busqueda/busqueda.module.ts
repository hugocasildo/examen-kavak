import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { PipesModule } from 'src/app/core/shared/pipes/pipes.module';

@NgModule({
  declarations: [BusquedaComponent],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    PipesModule
  ]
})
export class BusquedaModule { }
