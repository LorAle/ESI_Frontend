import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'esi-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.scss']
})
export class DispositionComponent implements OnInit {

  cards: { title: string, icon: string, color: string, route: string }[] = [
    { title: 'Bestellung', icon: 'format_list_numbered', color: 'lightblue', route: 'disposition/order' },
    { title: 'Einlagerung', icon: 'format_list_numbered', color: 'lightyellow', route: 'disposition/storage' },
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
