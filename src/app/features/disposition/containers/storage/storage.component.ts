import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MawiService, ProductionService } from 'src/app/core/services';
import { ProductionOrderFormModel } from 'src/app/models';

@Component({
  selector: 'esi-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  @ViewChild('colors') colorsSelectionList: MatSelectionList;
  typesOfColors: string[] = ['Cyan', 'Magenta', 'Yellow', 'Key'];
  selectedValue: any[];
  //comment = new FormControl();
  countOfShirts = new FormControl();
  auftrag = new FormControl();

  hidePopup: boolean;
  popupContent: string;


  constructor(
    private _router: Router,
    private _mawiService: MawiService,
    private _prodService: ProductionService
  ) { }

  ngOnInit() {
    this.hidePopup = true;
    this.popupContent = "";
  }

  onSelectionChange() {
    console.log(this.getSelected());
    console.log(this.getUnselected());
  }

  getSelected() {
    return this.colorsSelectionList.selectedOptions.selected.map(s => s.value);
  }

  getUnselected() {
    const differ = [];
    const selected = this.getSelected();
    for (let i = 0; i < this.typesOfColors.length; i++) {
      if (selected.indexOf(this.typesOfColors[i]) === -1) {
        differ.push(this.typesOfColors[i])
      }
    }
    return differ;
  }

  unSelectAll() {
    this.selectedValue = undefined;
  }

  selectAll() {
    this.selectedValue = this.typesOfColors;
  }

  farbeEinlagern() {
    var feedback = "";
    var order = { 'StockId': 0, 'ProdcutionId': 0, 'CustOrderId': 0, 'Amount': 1 }
    this.getSelected().forEach(element => {
      switch (element) {
        case "Cyan":
          order.StockId = 1;
          this._mawiService.collectMaterial(order).subscribe();
          if(feedback != "")
            feedback = feedback.concat(", ");
          feedback = feedback.concat("Cyan");
          break;
        case "Magenta":
          order.StockId = 2;
          this._mawiService.collectMaterial(order).subscribe();
          if(feedback != "")
            feedback = feedback.concat(", ");
          feedback = feedback.concat("Magenta");
          break;
        case "Yellow":
          order.StockId = 3;
          this._mawiService.collectMaterial(order).subscribe();
          if(feedback != "")
            feedback = feedback.concat(", ");
          feedback = feedback.concat("Yellow");
          break;
        case "Key":
          order.StockId = 4;
          this._mawiService.collectMaterial(order).subscribe();
          if(feedback != "")
            feedback = feedback.concat(", ");
          feedback = feedback.concat("Key");
          break;
      }
    });
    this.fillPopup("Collect: " + feedback);
    this.togglePopup();
  }

  tshirtsEinlagern() {
    this._prodService.getProductionOrder(this.auftrag.value).subscribe(x => {
      x.ProductionStatusId = 3;
      this._prodService.updateProductionOrder(x.Id, <ProductionOrderFormModel>{...x}).subscribe();
      var order = { 'StockId': x.Id, 'ProdcutionId': x.Id, 'CustOrderId': x.CustomerOrderId, 'Amount': this.countOfShirts.value }
      this._mawiService.collectMaterial(order).subscribe()
      this.fillPopup("Auftrag: " + order.ProdcutionId + ", Anzahl: " + order.Amount + ", StockId: " + order.StockId + ", CustId: " + order.CustOrderId);
      this.togglePopup();
    });

  }

  navigate(route: string) {
    this._router.navigate([route]);
  }

  togglePopup() {
    this.hidePopup = !this.hidePopup;
  }

  fillPopup(content: string) {
    this.popupContent = content;
  }

}
