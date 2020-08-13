import {Game} from "./game.model";
import {storagefunctions} from "./game.model";


export class Support{
game:Game;
sf:storagefunctions;
public list1:Array<number>;
public pr:number;//previous row
public nr:number;//next row
public pc:number;//previous column
public nc:number;//next column
public lc:number;//last column
public lr:number;//last row
public v:number;
constructor(){
    this.game=new Game();
    this.sf=new storagefunctions();
}
checkbonus(i,j){
    //console.log(i,j)
    //console.log("check bonus")
    this.game.b1=this.sf.getb1()        // get matrix b1
    //console.log(this.game.list)     
    this.list1=this.game.list.slice(1,-1)
    //console.log(this.list1)
    //for(let i of this.list1){
    //    for(let j of this.list1){
            this.lr=this.game.list[this.game.list.length-1]
            this.lc=this.game.list[this.game.list.length-1]
            //check for upper left corner square alone
            if(i==0 && j==0){
                this.game.b1=  this.assignbonuslr(this.game.b1,i,j);
            }
            //squares on top row except first and last column
            if(i==0 &&j!=0 && j!=this.lc)
            {
                this.game.b1=  this.assignbonuslr(this.game.b1,i,j);
                this.game.b1=  this.assignbonusll(this.game.b1,i,j);

            }
            //square on last column of top row
            if(i==0 && j==this.lc)
            {
                this.game.b1=  this.assignbonusll(this.game.b1,i,j);
            }
            //squares on first column except top and last row
            if(i!=0 && i!=this.lr && j==0)
            {
                this.game.b1=  this.assignbonusur(this.game.b1,i,j);
                this.game.b1=  this.assignbonuslr(this.game.b1,i,j); 
            }
            //square on first column last row alone
            if(i==this.lr && j==0)
            {
                this.game.b1=  this.assignbonusur(this.game.b1,i,j);
            }
            //last row squares except first and last column
            if(i==this.lr && j!=0 && j!=this.lc)
            {
                this.game.b1=  this.assignbonusur(this.game.b1,i,j);
                this.game.b1=  this.assignbonusul(this.game.b1,i,j);
            }
            //square in last column of last row
            if(i==this.lr && j==this.lc)
            {
                this.game.b1=  this.assignbonusul(this.game.b1,i,j);
            }
            //squares in last column except first and last row
            if(i!=0 && i!=this.lr && j==this.lc)
            {
                this.game.b1=  this.assignbonusll(this.game.b1,i,j);
                this.game.b1=  this.assignbonusul(this.game.b1,i,j);
            }
            //all inner rows and columns except boundaries
            if(i!=0 && j!=0 && i!=this.lr && j!=this.lc)
            {
                this.game.b1=  this.assignbonusur(this.game.b1,i,j);
                this.game.b1=  this.assignbonuslr(this.game.b1,i,j);
                this.game.b1=  this.assignbonusul(this.game.b1,i,j);
                this.game.b1=  this.assignbonusll(this.game.b1,i,j);
            }

this.sf.setb1(this.game.b1);
this.addbonus()
}
//double the score in highlighted square
addbonus(){
    let redb=0;
    let blueb=0;
    let data=this.sf.getb2()
    this.game.b1=this.sf.getb1()
    for(let i of this.game.list){
        for (let j of this.game.list){
            if (this.game.b1[i][j]==3){
                    redb=redb+data[i][j]  //add score to redbonus
            }
            if(this.game.b1[i][j]==4){
                blueb=blueb+data[i][j]    //add score to bluebonus
            }
        }
    }
    //console.log(redb,blueb)
    this.sf.setredbonus(redb)
    this.sf.setbluebonus(blueb)
}
//upper left square assign bonus function
assignbonusul(mat,i,j){
    this.pr=i-1;
    this.pc=j-1;
    //console.log("assignbonusul")
    if (mat[i][j] == mat[this.pr][this.pc] && mat[this.pr][j]==mat[i][this.pc] && 
        mat[i][j]==mat[this.pr][j]){
    this.v=this.checkvalue(mat,i,j)
    //this.game.b1=this.sf.getb1()
        mat[i][j]=this.v;
        mat[this.pr][this.pc]=this.v;
        mat[this.pr][j]=this.v;
        mat[i][this.pc]=this.v;}
    
        return mat
}
//upper right square assign bonus function
assignbonusur(mat,i,j){
    //console.log("assignbonusur")
    this.pr=i-1;
    this.nc=j+1;
    if(mat[i][j]==mat[this.pr][j] && mat[this.pr][j]==mat[i][this.nc] &&
        mat[i][j]==mat[this.pr][this.nc]){
    this.v=this.checkvalue(mat,i,j);
        mat[i][j]=this.v;
        mat[i][this.nc]=this.v;
        mat[this.pr][this.nc]=this.v;
        mat[this.pr][j]=this.v;
    }
        return mat
}
//lower right square assign bonus function
assignbonuslr(mat,i,j){
    //console.log("assignbonuslr")
    this.nr=i+1;
    this.nc=j+1;
    if(mat[i][j]==mat[this.nr][this.nc] && mat[i][this.nc]==mat[this.nr][j] &&
        mat[i][j]==mat[i][this.nc]){
    this.v=this.checkvalue(mat,i,j);
    //this.game.b1=this.sf.getb1()
        mat[i][j]=this.v;
        mat[i][this.nc]=this.v;
        mat[this.nr][this.nc]=this.v;
        mat[this.nr][j]=this.v;
        }
        return mat
}
//lower left square assign bonus fucntion
assignbonusll(mat,i,j){
    //console.log("assignbonusll")
    this.nr=i+1;
    this.pc=j-1;
    if(mat[i][j]==mat[this.nr][this.pc] && mat[i][this.pc]==mat[this.nr][j] &&
        mat[i][j]== mat[i][this.pc]){
    this.v=this.checkvalue(mat,i,j);
    //this.game.b1=this.sf.getb1()
        mat[i][j]=this.v;
        mat[i][this.pc]=this.v;
        mat[this.nr][this.pc]=this.v;
        mat[this.nr][j]=this.v;
        }
        return mat
        }
//function to assign colour value 
checkvalue(mat,i,j){
    //this.game.b1=this.sf.getb1()
    this.v=mat[i][j]
    if(mat[i][j]==1){
        this.v=3;
    }
    if(mat[i][j]==2){
        this.v=4;
    }
    return this.v;
}
}