import { CapitalizePipe } from './capitalize.pipe';
import { NgModule } from '@angular/core';

/**
 * Modulo de los pipes generados en el proyecto.
 */
@NgModule({
  declarations: [CapitalizePipe],
  imports: [],
  exports: [CapitalizePipe]
})

export class PipesModule{}
