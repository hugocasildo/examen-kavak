import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../http/api.service';
import { catchError, map } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable()
export class FindPostResolver implements Resolve<any> {

  /**
   * Resolver para filtrar por palabra ingresada por parametro.
   * @param api ApiService que permite realizar la llamada al servicio que obtiene todas las
   */
  constructor(public api: ApiService){}

  resolve( route: ActivatedRouteSnapshot) {
    const _wordToFind = route.paramMap.get('palabra').toLowerCase();
    const _regexWord = '\\b' + _wordToFind + '\\b';

    return this.api.getPosts().pipe(
      map(_data => {
        return _data.filter( _item => new RegExp(_regexWord).test(_item.body.toLowerCase()) )
      }),
       catchError(() => empty())
    )

  }

}
