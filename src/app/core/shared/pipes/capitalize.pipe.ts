import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe que capitaliza cada palabra de una cadena.
 */
@Pipe({name: "capitalize"})
export class CapitalizePipe implements PipeTransform{

  transform(_string: string) {

    return _string.split(' ')
      .map((_str) => _str.charAt(0).toUpperCase() + _str.substring(1))
      .join(' ');

  }
}
