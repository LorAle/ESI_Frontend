import { Component, OnInit } from '@angular/core';
import { ProductionService } from './core/services';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'esi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _service: ProductionService,
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ){

  }
  
  ngOnInit(): void {
    this._service.createProduct().subscribe(x => {
      console.log(x)
    });
    this.registerImages();
  }

  title = 'EsiUi';

  registerImages(){
    this._matIconRegistry.addSvgIcon(
      "brandLogo",
      this._domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/Logo.svg")
    );
  }
}
