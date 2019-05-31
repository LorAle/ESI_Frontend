import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MawiService } from 'src/app/core/services';

@Component({
  selector: 'esi-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  countOfCyan = new FormControl();
  countOfYellow = new FormControl();
  countOfMagenta = new FormControl();
  countOfKey = new FormControl();

  countOfItems = new FormControl();
  //comment = new FormControl();
  material = new FormControl();
  hidePopup: boolean;
  popupContent: string;

  constructor(
    private _router: Router,
    private _mawiService: MawiService
  ) { }

  ngOnInit() {
    this.hidePopup = true;
    this.popupContent = "";
  }

  farbeBestellen(){
    var status_c = this._mawiService.supplyMaterial("cyan", this.countOfCyan.value);
    var status_m = this._mawiService.supplyMaterial("magenta", this.countOfMagenta.value);
    var status_y = this._mawiService.supplyMaterial("yellow", this.countOfYellow.value);
    var status_k = this._mawiService.supplyMaterial("key", this.countOfKey.value);
    this.fillPopup("Bestellung: Cyan: "+this.countOfCyan.value+" Status: "+status_c+
      ", Magenta: "+this.countOfMagenta.value+" Status: "+status_m+
      ", Yellow: "+this.countOfYellow.value+" Status: "+status_y+
      ", Key: "+this.countOfKey.value+" Status: "+status_k);
    this.togglePopup();
  }

  materialBestellen(){
    var status = this._mawiService.supplyMaterial(this.material.value, this.countOfItems.value);
    this.fillPopup("Material: "+this.material.value+", Anzahl: "+this.countOfItems.value+", Status: "+status);
    this.togglePopup();
  }

  togglePopup(){
    this.hidePopup = !this.hidePopup;
  }

  fillPopup(content: string){
    this.popupContent = content;
  }

  navigate(route: string){
    this._router.navigate([route]);
  }

}
