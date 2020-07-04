import { Component,OnInit } from "@angular/core";
import {Game} from "./game.model"



@Component({
    selector:"T3game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"]

})
export class gamecomponent{
    game:Game;
    public rows;
    public cols; 
    
    //5x5
    public rowInput = 5; 
    public colsInput = 5;
    
    constructor(){
        this.game=new Game();
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(4), _ => Array(4).fill(0));
        /**this.game.b1=[[0,0],[0,0]]
        this.game.b2=[[0,0],[0,0]]
        this.game.b3=[[0,0],[0,0]]
        this.game.b4=[[0,0],[0,0]]
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        /** Initialize touch count  */
        this.game.tapcount=0
        /** Initialize colour for square */
        this.game.colour=['gray','#ec7063',' #85c1e9',"#e74c3c", "#3498db" ] /**gray,red,blue,highlighted red,high blue */
        /** for list in looping */
        this.game.list=[0,1]
    }
    ontap(){
        console.log('hi')
        
    }
 
}