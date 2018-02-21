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
  public selectedId = null;
  public materials = [];
  public isLoading = false;
  private materialsFetched = false;
  private pageNo = 0;
  private PAGE_SIZE = 8;

  constructor(private routeParams: ActivatedRoute,
              @Inject(MaterialsService)
              private materialsService) {
  }

  ngOnInit() {
    const { params, queryParams } = this.routeParams.snapshot;
    this.selectedId = params.id;
    this.selectedStatus = queryParams.status || 'new';
    this.getMaterials();

  }

  ngAfterViewInit() {}

  private getMaterials() {
    if (!this.isLoading && !this.materialsFetched) {
      this.isLoading = true;
      console.log('getMaterials');
      this.materialsService.getMaterialsByState(this.selectedStatus, this.pageNo, this.PAGE_SIZE).subscribe((resp) => {
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

}
