import { Component,OnInit } from "@angular/core";
import {Game} from "./game.model"
import { Color } from "tns-core-modules/color";

@Component({
    selector:"T3game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"]

})
export class gamecomponent{
    game:Game;
    constructor(){
        this.game=new Game();
        this.game.b1="blue";
    }
    ontap(){
        console.log('hi')
        this.game.b1="red"
    }
 
}