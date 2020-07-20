import { Component,OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SecureStorage } from "nativescript-secure-storage";

let secureStorage = new SecureStorage();
import {Game} from "./game.model";
import {storagefunctions} from "./game.model";
import {Support} from "./game.support";

@Component({
    selector:"T3game",
    templateUrl:"./game.component.html",
    styleUrls:["./game.component.css"],
    providers:[Support],

})
export class gamecomponent implements OnInit{
    game:Game;
    sf:storagefunctions;
    //5x5 matrix parameters initialization
    public minscore=Math.ceil(1);  //min score set
    public maxscore=Math.floor(5); //max score set
    public totbox:number; //total cubes
    public a :string;
   constructor(private page: Page,private support:Support){
      
        this.game=new Game();
        this.sf=new storagefunctions();
        this.totbox=this.game.rowInput*this.game.colsInput;
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));
        this.sf.setb1(this.game.b1);
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        this.sf.setxscore(this.game.xscore);
        this.sf.setyscore(this.game.yscore);
        /** Initialize touch count  */
        this.game.tapcount=0
        this.sf.settapcount(this.game.tapcount)
        /** Initialize colour for square */
        //this.game.colour=['gray','#e74c3c','#35f9f9',"#ff0000", "#355bf9" ] /**gray,red,blue,highlighted red,high blue */
        /** for list in looping */
        //this.game.list=Array.from(Array(this.rowInput).keys()) //fills the array with index 
        /** score matrix */
        this.game.b2 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput));
        this.sf.setb2(this.game.b2);
        //this.game.b3 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput));
       
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
      }
      /** score function */
    ontap(i,j){
        //this.game.b1=this.sf.getb1();
        this.game.xscore=this.sf.getxscore()
        if(this.totbox>this.game.tapcount && this.game.b1[i][j]==0){
            this.game.tapcount++;
            this.game.b2[i][j]=Math.floor(Math.random() * (this.maxscore - this.minscore + 1)) + this.minscore;
            this.sf.settapcount(this.game.tapcount)
            this.sf.setb2(this.game.b2)
        if (this.game.tapcount & 1){
            this.game.b1[i][j]=1;
            this.game.xscore=this.game.xscore+this.game.b2[i][j];
            this.sf.setb1(this.game.b1)
            this.sf.setxscore(this.game.xscore)
            this.support.checkbonus()
            this.game.b1=this.sf.getb1()
        }
        if(!(this.game.tapcount&1)){
            this.game.b1[i][j]=2; 
            this.game.yscore=this.game.yscore+this.game.b2[i][j];
            this.sf.setb1(this.game.b1);
            this.sf.setyscore(this.game.yscore)
           this.support.checkbonus()
           this.game.b1=this.sf.getb1()
        }
    } 
      }
    //Play again functions, resets all parameters in the page
    playagain(){
        this.game.b1 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));
        this.sf.setb1(this.game.b1)
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        this.sf.setxscore(this.game.xscore)
        this.sf.setyscore(this.game.yscore)
        /** Initialize touch count  */
        this.game.tapcount=0 
        this.sf.settapcount(this.game.tapcount)
        /** score matrix */
        this.game.b2 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput));
        this.sf.setb2(this.game.b2)
    }
 
}