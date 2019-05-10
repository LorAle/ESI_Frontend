import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'esi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: { title: string, icon: string, color: string, route: string }[] = [
    { title: 'Produktions-überwachung', icon: 'format_list_numbered', color: 'lightblue', route: 'visualisation/monitoring' },
    { title: 'Fertigungs-aufträge', icon: 'format_color_fill', color: 'lightgreen', route: 'visualisation/orders' },
    { title: 'Auftragsplanung', icon: 'timeline', color: 'lightyellow', route: 'visualisation/plan' },
    { title: 'Kennzahlen', icon: 'insert_chart', color: 'lightsalmon', route: 'reporting/keyfigures' }
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
