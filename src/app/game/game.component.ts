import { Component,OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SecureStorage } from "nativescript-secure-storage";

let secureStorage = new SecureStorage();
import {Game} from "./game.model";
import {Support} from "./game.support";
import { concat } from "rxjs";
@Component({
    selector:"T3game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"],
    providers:[Support],

})
export class gamecomponent implements OnInit{
    game:Game;
    //5x5 matrix parameters initialization
    public minscore=Math.ceil(1);  //min score set
    public maxscore=Math.floor(5); //max score set
    public rowInput = 4;   //row count
    public colsInput = 4;  //column count
    public totbox=this.rowInput*this.colsInput; //total cubes
    public a :string;
   constructor(private page: Page,private support:Support){
      
        this.game=new Game();
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(this.rowInput), _ => Array(this.colsInput).fill(0));
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        /** Initialize touch count  */
        this.game.tapcount=0
        /** Initialize colour for square */
        this.game.colour=['gray','#e74c3c','#35f9f9',"#ff0000", "#355bf9" ] /**gray,red,blue,highlighted red,high blue */
        /** for list in looping */
        this.game.list=Array.from(Array(this.rowInput).keys()) //fills the array with index 
        /** score matrix */
        this.game.b2 = Array.from(Array(this.rowInput), _ => Array(this.colsInput));
        this.game.b3 = Array.from(Array(this.rowInput), _ => Array(this.colsInput));
       
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
            //this.game=this.support.checkbonus(this.game)
        }
        if(!(this.game.tapcount&1)){
            this.game.b1[i][j]=2; 
            this.game.yscore=this.game.yscore+this.game.b2[i][j];
           // this.game=this.support.checkbonus(this.game)
        }
    } 

    for(let i of this.game.list){
        for(let j of this.game.list){
            secureStorage.setSync({
                key: (String(i)).concat(String(j)),
                value:  String(this.game.b1[i][j])   })
        }
    }
    //console.log(this.game)
    for(let i of this.game.list){
        for(let j of this.game.list){
            this.game.b3[i][j]=(Number(secureStorage.getSync({
                key: (String(i)).concat(String(j)) })))
        }
    }
    console.log(this.game.b3)    }
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