import { Component, OnInit } from '@angular/core';
import { ProductionService } from './services/production.service';

@Component({
  selector: 'esi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _service: ProductionService
  ){

  }
  
  ngOnInit(): void {
    this._service.getProducts().subscribe(x => {
      console.log(x)
    });
  }
  title = 'EsiUi';

}
