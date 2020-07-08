import { Component,OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import {Game} from "./game.model"
@Component({
    selector:"T3game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"]

})
export class gamecomponent implements OnInit{
    game:Game;
    //5x5 matrix parameters initialization
    public minscore=Math.ceil(1);  //min score set
    public maxscore=Math.floor(5); //max score set
    public rowInput = 4;   //row count
    public colsInput = 4;  //column count
    public totbox=this.rowInput*this.colsInput; //total cubes
   constructor(private page: Page){
        this.game=new Game();
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(this.rowInput), _ => Array(this.colsInput).fill(0));
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        /** Initialize touch count  */
        this.game.tapcount=0
        /** Initialize colour for square */
        this.game.colour=['gray','#e74c3c','#3498db',"#e74c3c", "#3498db" ] /**gray,red,blue,highlighted red,high blue */
        /** for list in looping */
        this.game.list=[0,1,2,3]
        /** score matrix */
        this.game.b2 = Array.from(Array(this.rowInput), _ => Array(this.colsInput));
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
      }
      /** score function */
    ontap(i,j){
        if(this.totbox>this.game.tapcount && this.game.b1[i][j]==0){
            this.game.tapcount++;
            this.game.b2[i][j]=Math.floor(Math.random() * (this.maxscore - this.minscore + 1)) + this.minscore;
        if (this.game.tapcount & 1){
            this.game.b1[i][j]=1;
            this.game.xscore=this.game.xscore+this.game.b2[i][j];
        }
        else{
            this.game.b1[i][j]=2; 
            this.game.yscore=this.game.yscore+this.game.b2[i][j];
        }
    } 
    }
    //Play again functions, resets all parameters in the page
    playagain(){
        this.game.b1 = Array.from(Array(this.rowInput), _ => Array(this.colsInput).fill(0));
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        /** Initialize touch count  */
        this.game.tapcount=0 
        /** score matrix */
        this.game.b2 = Array.from(Array(this.rowInput), _ => Array(this.colsInput));

    }
 
}