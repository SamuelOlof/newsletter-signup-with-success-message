import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {

  @Input() email:string;

  reload(){
    window.location.reload();
  }
}
