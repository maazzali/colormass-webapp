import { Component, Inject, Input, OnInit } from '@angular/core';

import { MaterialsService } from '../materials.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  @Input('materialId') public materialId;
  public isLoading = false;
  public material = null;
  public materialNotFound = false;

  constructor(@Inject(MaterialsService) private materialsService) { }

  ngOnInit() {
    this.getMaterialById(this.materialId);
  }

  public getMaterialById(id) {
    if (!this.isLoading) {
      this.isLoading = true;
      this.materialsService.getMaterialById(id).subscribe(resp => {
        this.isLoading = false;
        this.material = resp;
      }, error => {
        if (error.status === 404) {
          this.materialNotFound = true;
        }
        this.isLoading = false;
      });
    }
  }

}
