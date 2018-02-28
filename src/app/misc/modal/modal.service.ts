import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  private status = false;
  private modalContainerRef = null;

  constructor() { }

  public open() {
    this.status = true;
  }

  public close() {
    this.status = false;
  }

  public getStatus() {
    return this.status;
  }

  public setModalContainerRef(ref) {
    this.modalContainerRef = ref;
  }

  public getModalContainerRef() {
    return this.modalContainerRef;
  }
}
