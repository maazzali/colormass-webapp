import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MaterialsService } from './materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit, AfterViewInit {
  public selectedStatus = null;
  public materials = [];
  public getMaterialSubscribe = null;
  public isLoading = false;
  private materialsFetched = false;
  private pageNo = 0;
  private PAGE_SIZE = 8;

  constructor(private routeParams: ActivatedRoute,
              @Inject(MaterialsService) private materialsService) {}

  ngOnInit() {
    this.routeParams.queryParamMap.subscribe(this.onChangeQueryParams.bind(this));
  }

  ngAfterViewInit() {}

  public getMaterials(selectedStatus, forceFetch = false) {
    if (forceFetch || (!this.isLoading && !this.materialsFetched)) {
      this.isLoading = true;
      if (this.getMaterialSubscribe) {
        this.getMaterialSubscribe.unsubscribe();
      }

      this.getMaterialSubscribe = this.materialsService.getMaterialsByState(selectedStatus, this.pageNo, this.PAGE_SIZE)
        .subscribe(resp => {
        this.isLoading = false;
        if (resp.length > 0) {
          this.pageNo += 1;
          this.materials = this.materials.concat(resp);
        } else {
          this.materialsFetched = true;
        }
      });
    }
  }

  private onChangeQueryParams(data) {
    this.materials = [];
    this.materialsFetched = false;
    this.pageNo = 0;

    const params = data.params;
    this.selectedStatus = params.status || 'new';
    this.getMaterials(this.selectedStatus, true);
  }
}
