import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/observable/empty';

@Injectable()
export class MaterialsService {
  private materialsUrl = 'api/materials';

  constructor(private http: HttpClient) {}

  getMaterials() {
    return this.http.get(this.materialsUrl)
      .catch(this.handleError);
  }

  getMaterialsByState(state, pageNo, pageSize) {
    return this.http.get(this.materialsUrl)
      .flatMap((materials: any) => Observable.from(materials))
      .filter((material: any) => material.state === state)
      .bufferCount(pageSize)
      .elementAt(pageNo, [])
      .catch(() => Observable.empty());
  }

  getMaterial(id: number) {
    const url = `${this.materialsUrl}/${id}`;
    return this.http.get(url)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

  //
  // // This get-by-id will 404 when id not found
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.materialsUrl}/${id}`;
  //   return this.http.get<Hero>(url)
  //     .catch(this.handleError);
  // }
  //
  // // This get-by-id does not 404; returns undefined when id not found
  // // getHero<Data>(id: number): Observable<Hero> {
  // //   const url = `${this._materialsUrl}/?id=${id}`;
  // //   return this.http.get<Hero[]>(url)
  // //     .map(heroes => heroes[0] as Hero)
  // //     .catch(this.handleError);
  // // }
  // addHero(name: string): Observable<Hero> {
  //   const hero = { name };
  //
  //   return this.http.post<Hero>(this.materialsUrl, hero, cudOptions)
  //     .catch(this.handleError);
  // }
  //
  // deleteHero(hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.materialsUrl}/${id}`;
  //
  //   return this.http.delete<Hero>(url, cudOptions)
  //     .catch(this.handleError);
  // }
  //
  // searchHeroes(term: string): Observable<Hero[]> {
  //   term = term.trim();
  //   // add safe, encoded search parameter if term is present
  //   const options = term ?
  //     { params: new HttpParams().set('name', term) } : {};
  //
  //   return this.http.get<Hero[]>(this.materialsUrl, options)
  //     .catch(this.handleError);
  // }
  //
  // updateHero(hero: Hero): Observable<null> {
  //   return this.http.put(this.materialsUrl, hero, cudOptions)
  //     .catch(this.handleError);
  // }
  //
  // private handleError(error: any) {
  //   // In a real world app, we might send the error to remote logging infrastructure
  //   // and reformat for user consumption
  //   console.error(error); // log to console instead
  //   return Observable.throw(error);
  // }
}
