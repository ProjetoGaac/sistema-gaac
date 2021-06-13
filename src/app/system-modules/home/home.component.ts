import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gaac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'GAAC - Sistema Gerenciador de Arquivos das Aulas';

  constructor() { }

  ngOnInit(): void {
  }

}
