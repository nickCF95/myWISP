import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title:string = 'Gestión de Consumo de Planes de Datos en Simcard';

  public getTitle():string{
    return this.title;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
