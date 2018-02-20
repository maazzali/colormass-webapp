import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  public selectedStatus = null;
  public selectedId = null;

  constructor(private routeParams: ActivatedRoute) {}

  ngOnInit() {
    const { params, queryParams } = this.routeParams.snapshot;
    this.selectedId = params.id;
    this.selectedStatus = queryParams.status || 'new';
    console.log('this.selectedId', this.selectedId, 'this.selectedStatus', this.selectedStatus);
  }

}
