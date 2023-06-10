import { Component } from '@angular/core';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})


export class NewsletterComponent {
  subscribeButtonClicked:boolean = false;

  updates = [
    {"update": "Product discovery and building what matters"},
    {"update": "Measuring to ensure updates are a success"},
    {"update": "And much more!"},
  ]

  subBtn(){
    this.subscribeButtonClicked = true;
  }
}
