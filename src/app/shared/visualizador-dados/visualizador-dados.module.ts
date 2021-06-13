import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VisualidorDadosComponent } from "./visualizador-dados.component";

@NgModule({
    declarations: [
        VisualidorDadosComponent
    ],
    exports: [
        VisualidorDadosComponent
    ],
    imports: [
        CommonModule
    ]
})
export class VisualizadorDadosModule{

}