import { Component, OnInit } from '@angular/core'; // importação

//decorator 
@Component
({
  selector: 'gaac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//exporta a classe criada
export class LoginComponent implements OnInit 
{
    constructor(){}
    ngOnInit(): void {}
}