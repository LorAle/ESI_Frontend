import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  hideFailedPopup: boolean;
  popupContent: string;

  constructor(
    private _router: Router,
    private _mawiService: MawiService
  ) { }

  ngOnInit() {
    this.hidePopup = true;
    this.hideFailedPopup = true;
    this.popupContent = "";
  }

  farbeBestellen() {
    var success = true;
    var feedback = "";
    if (this.countOfCyan.value != null) {
      var status_c = this._mawiService.supplyMaterial("cyan", this.countOfCyan.value).subscribe(_ => { }, error => { success = false });
      feedback = feedback.concat("Cyan: " + this.countOfCyan.value);
    }
    if (this.countOfMagenta.value != null) {
      var status_m = this._mawiService.supplyMaterial("magenta", this.countOfMagenta.value).subscribe(_ => { }, error => { success = false });
      feedback = feedback.concat("\n, Magenta: " + this.countOfMagenta.value);
    }
    if (this.countOfYellow.value != null) {
      var status_y = this._mawiService.supplyMaterial("yellow", this.countOfYellow.value).subscribe(_ => { }, error => { success = false });
      feedback = feedback.concat("\n, Yellow: " + this.countOfYellow.value);
    }
    if (this.countOfKey.value != null) {
      var status_k = this._mawiService.supplyMaterial("key", this.countOfKey.value).subscribe(_ => { }, error => { success = false });
      feedback = feedback.concat("\n, Key: " + this.countOfKey.value);
    }
    if (feedback != "") {
      this.fillPopup(feedback);

      if (success === true) {
        this.togglePopup();
      } else {
        this.toggleFailedPopup();
      }

    }
  }

  materialBestellen() {
    this.fillPopup("Material: " + this.material.value + ", Anzahl: " + this.countOfItems.value);
    var status = this._mawiService.supplyMaterial(this.material.value, this.countOfItems.value).subscribe(x => {
      this.togglePopup();
    }, error => {
      this.toggleFailedPopup();
    });

  }

  togglePopup() {
    this.hidePopup = !this.hidePopup;
  }

  toggleFailedPopup() {
    this.hideFailedPopup = !this.hideFailedPopup;
  }

  fillPopup(content: string) {
    this.popupContent = content;
  }

  navigate(route: string) {
    this._router.navigate([route]);
  }

}
