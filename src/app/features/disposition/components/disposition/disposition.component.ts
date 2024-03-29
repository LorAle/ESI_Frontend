import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'esi-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.scss']
})
export class DispositionComponent implements OnInit {

  cards: { title: string, icon: string, color: string, route: string }[] = [
    { title: 'Bestellung', icon: 'shopping_cart', color: 'lightblue', route: 'disposition/order' },
    { title: 'Einlagerung', icon: 'storage', color: 'lightyellow', route: 'disposition/storage' },
  ]

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  navigate(route: string){
    this._router.navigate([route]);
  }

}
