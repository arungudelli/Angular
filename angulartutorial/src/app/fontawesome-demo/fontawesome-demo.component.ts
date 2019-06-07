import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fontawesome-demo',
  templateUrl: './fontawesome-demo.component.html',
  styleUrls: ['./fontawesome-demo.component.scss']
})
export class FontawesomeDemoComponent implements OnInit {

  coffeeIcon = faCoffee;

  constructor() { }
  ngOnInit() {
  }

}
