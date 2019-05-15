import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

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
  comment = new FormControl();
  material = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  farbeBestellen(){
    alert("Bestellung: Cyan: "+this.countOfCyan.value+", Magenta: "+this.countOfMagenta.value+", Yellow: "+this.countOfYellow.value+", Key: "+this.countOfKey.value);
  }

  materialBestellen(){
    alert("Material: "+this.material.value+", Anzahl: "+this.countOfItems.value+", comment: "+this.comment.value);
  }

}
