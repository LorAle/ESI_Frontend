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
    var feedback = "";
    if(this.countOfCyan.value != null){
      var status_c = this._mawiService.supplyMaterial("cyan", this.countOfCyan.value).subscribe();
      feedback = feedback.concat("Cyan: "+this.countOfCyan.value);
    }
    if(this.countOfMagenta.value != null){
      var status_m = this._mawiService.supplyMaterial("magenta", this.countOfMagenta.value).subscribe();
      feedback = feedback.concat("\n, Magenta: "+this.countOfMagenta.value);
    }
    if(this.countOfYellow.value != null){
      var status_y = this._mawiService.supplyMaterial("yellow", this.countOfYellow.value).subscribe();
      feedback = feedback.concat("\n, Yellow: "+this.countOfYellow.value);
    }
    if(this.countOfKey.value != null){
      var status_k = this._mawiService.supplyMaterial("key", this.countOfKey.value).subscribe();
      feedback = feedback.concat("\n, Key: "+this.countOfKey.value);
    }
    if(feedback != ""){
      this.fillPopup(feedback);
      this.togglePopup();
    }
  }

  materialBestellen(){
    var status = this._mawiService.supplyMaterial(this.material.value, this.countOfItems.value).subscribe();
    this.fillPopup("Material: "+this.material.value+", Anzahl: "+this.countOfItems.value);
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
