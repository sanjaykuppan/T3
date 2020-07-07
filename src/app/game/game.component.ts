import { Component,OnInit } from "@angular/core";
import {Game} from "./game.model"



@Component({
    selector:"T3game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"]

})
export class gamecomponent{
    game:Game;
  
    //5x5
    public rowInput = 4; 
    public colsInput = 4;
    public totbox=this.rowInput*this.colsInput;
    
   constructor(){
        this.game=new Game();
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(this.rowInput), _ => Array(this.colsInput).fill(0));
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        /** Initialize touch count  */
        this.game.tapcount=0
        /** Initialize colour for square */
        this.game.colour=['gray','#ec7063',' #85c1e9',"#e74c3c", "#3498db" ] /**gray,red,blue,highlighted red,high blue */
        /** for list in looping */
        this.game.list=[0,1,2,3]
        
    }
    ontap(i,j){
        console.log(i,j);
        if(this.totbox>this.game.tapcount){
            this.game.tapcount++;
        if (this.game.tapcount & 1){
            this.game.b1[i][j]=1;
        }
        else{
            this.game.b1[i][j]=2;  
        }
    }
        
        
    }
 
}