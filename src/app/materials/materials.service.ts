import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/elementAt';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MaterialsService {
  private materialsUrl = 'api/materials';

  constructor(private http: HttpClient) {}

  getMaterialById(id) {
    const url = `${this.materialsUrl}/${id}`;
    return this.http.get(url)
      .catch(this.handleError);
  }

  getMaterialsByState(state, pageNo, pageSize) {
    const url = this.materialsUrl;
    return this.http.get(url)
      .flatMap((materials: any) => Observable.from(materials))
      .filter((material: any) => material.state === state)
      .bufferCount(pageSize)
      .elementAt(pageNo, [])
      .catch(() => Observable.empty());
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }
}
