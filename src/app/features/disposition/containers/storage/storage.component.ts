import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSelectionList} from '@angular/material';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MawiService } from 'src/app/core/services';

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
  auftrag= new FormControl();


  constructor(
    private _router: Router,
    private _mawiService: MawiService
  ) { }

  onSelectionChange(){
    console.log(this.getSelected());
    console.log(this.getUnselected());
  }

  getSelected() {
    return this.colorsSelectionList.selectedOptions.selected.map(s => s.value);
  }

  getUnselected() {
    const differ = [];
    const selected = this.getSelected();
    for(let i = 0; i < this.typesOfColors.length; i ++) {
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

  ngOnInit() {
  }

  farbeEinlagern(){
    var order = { 'StockId':0, 'ProdcutionId':0, 'CustOrderId':0, 'Amount':1}
    this.getSelected().forEach(element => {
      switch(element){
        case "Cyan":
          order.StockId = 1;
          this._mawiService.collectMaterial(order);
        break;
        case "Magenta":
          order.StockId = 2;
          this._mawiService.collectMaterial(order);
        break;
        case "Yellow":
          order.StockId = 3;
          this._mawiService.collectMaterial(order);
        break;
        case "Key":
          order.StockId = 4;
          this._mawiService.collectMaterial(order);
        break;
      }
      alert("Collect: "+order.StockId);
    });
  }

  tshirtsEinlagern(){
    var order = { 'StockId':Math.round(Math.random()*100000000), 'ProdcutionId':this.auftrag.value, 'CustOrderId':0, 'Amount':this.countOfShirts.value}
    this._mawiService.collectMaterial(order)
    alert("Auftrag: "+order.ProdcutionId+", Anzahl: "+order.Amount+", StockId: "+order.StockId+", CustId: "+order.CustOrderId);
  }

  navigate(route: string){
    this._router.navigate([route]);
  }

}
