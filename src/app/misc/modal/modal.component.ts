import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.modalService.setModalContainerRef(this.container);
  }
}
