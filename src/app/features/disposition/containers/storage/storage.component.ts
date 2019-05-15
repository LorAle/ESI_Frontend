import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSelectionList} from '@angular/material';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'esi-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  @ViewChild('colors') colorsSelectionList: MatSelectionList;
  typesOfColors: string[] = ['Cyan', 'Magenta', 'Yellow', 'Key'];
  selectedValue: any[];
  comment = new FormControl();
  countOfShirts = new FormControl();
  auftrag= new FormControl();


  constructor() { }

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
    alert("Farben einlagern: "+this.getSelected());
  }

  tshirtsEinlagern(){
    alert("Auftrag: "+this.auftrag.value+", Anzahl: "+this.countOfShirts.value+", Bemerkung: "+this.comment.value);
  }

}
