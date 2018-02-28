import { AfterViewInit, Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from '../../misc/modal/modal.service';

import { MaterialComponent } from '../material/material.component';

@Component({
  selector: 'app-material-detail',
  template: '',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit, AfterViewInit {
  public selectedId = null;

  constructor(private routeParams: ActivatedRoute,
              @Inject(ModalService) private modalService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const { params } = this.routeParams.snapshot;
    this.selectedId = params.id;
  }


  ngAfterViewInit() {
    if (this.selectedId) {
      this.openModal(this.selectedId);
    }
  }

  private openModal(materialId = null) {
    this.modalService.open();
    const modalContainerRef = this.modalService.getModalContainerRef();
    modalContainerRef.clear();
    const materialFactory = this.resolver.resolveComponentFactory(MaterialComponent);
    const materialRef = modalContainerRef.createComponent(materialFactory);
    materialRef.instance.materialId = materialId;
  }
}
