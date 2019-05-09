import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: { title: string, icon: string, color: string }[] = [
    { title: 'Produktions-überwachung', icon: 'format_list_numbered', color: 'lightblue' },
    { title: 'Fertigungs-aufträge', icon: 'format_color_fill', color: 'lightgreen' },
    { title: 'Kennzahlen', icon: 'insert_chart', color: 'lightsalmon' }
  ]
  
  constructor() { }

  ngOnInit() {

  }

}
