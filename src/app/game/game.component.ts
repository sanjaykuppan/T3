import { Component,OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";



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
    public ceiling:number;
    public a :string;
   constructor(private page: Page,private support:Support){
      
        this.game=new Game();
        this.sf=new storagefunctions();
        this.totbox=this.game.rowInput*this.game.colsInput;
        this.ceiling=this.totbox-1;
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));
        this.sf.setb1(this.game.b1);
        /** Initialize value to score */
        //this.game.xscore=0;
        //this.game.yscore=0;
        this.sf.setxscore(this.game.xscore);
        this.sf.setyscore(this.game.yscore);
        /** Initialize touch count  */
       // this.game.tapcount=0
       // this.sf.settapcount(this.game.tapcount) 
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
        //setting click turn string
        if(this.game.tapcount==this.ceiling || this.game.tapcount>this.ceiling)
        {this.game.turn="All treasure unlocked"}
        //logic to handle click and invke main functions
        if(this.totbox>this.game.tapcount && this.game.b1[i][j]==0){
            if(!(this.game.tapcount==this.ceiling || this.game.tapcount>this.ceiling)){
            this.game.turn=(!(this.game.tapcount &1))?"Blue turn to unlock treasure":"Red turn to unlock treasure";
            }
            this.game.tapcount++;
            this.game.b2[i][j]=Math.floor(Math.random() * (this.maxscore - this.minscore + 1)) + this.minscore;
           // this.sf.settapcount(this.game.tapcount)
            this.sf.setb2(this.game.b2)
        if (this.game.tapcount & 1){
            this.game.b1[i][j]=1;
            this.game.xscore=this.game.xscore+this.game.b2[i][j];
            this.sf.setb1(this.game.b1)
            this.sf.setxscore(this.game.xscore)
            this.support.checkbonus(i,j)
            this.game.b1=this.sf.getb1()
        }
        if(!(this.game.tapcount&1)){
            this.game.b1[i][j]=2; 
            this.game.yscore=this.game.yscore+this.game.b2[i][j];
            this.sf.setb1(this.game.b1);
            this.sf.setyscore(this.game.yscore)
           this.support.checkbonus(i,j)
           this.game.b1=this.sf.getb1()
        }
    } 
    //console.log(this.game)
    this.game.redbonus=this.sf.getredbonus()
    this.game.bluebonus=this.sf.getbluebonus()
    this.game.redtotal=this.game.redbonus+this.game.xscore;
    this.game.bluetotal=this.game.bluebonus+this.game.yscore;
      }
    //Play again functions, resets all parameters in the page
    playagain(){
        this.game.b1 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));
        this.sf.setb1(this.game.b1)
        /** Initialize value to score */
        this.game.redtotal=0;
        this.game.bluetotal=0;
        this.game.xscore=0;
        this.game.yscore=0;
        this.game.redbonus=0;
        this.game.bluebonus=0;
        this.sf.setxscore(this.game.xscore)
        this.sf.setyscore(this.game.yscore)
        this.sf.setredbonus(this.game.redbonus)
        this.sf.setbluebonus(this.game.bluebonus)
        /** Initialize touch count  */
        this.game.tapcount=0; 
        this.sf.settapcount(this.game.tapcount)
        this.game.turn="Red turn to unlock treasure";
        /** score matrix */
        this.game.b2 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput));
        this.sf.setb2(this.game.b2)
    }
 
}