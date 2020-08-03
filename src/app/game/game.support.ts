import {Game} from "./game.model";
import {storagefunctions} from "./game.model";


export class Support{
game:Game;
sf:storagefunctions;
public list1:Array<number>;
public pr:number;
public nr:number;
public pc:number;
public nc:number;
public v:number;
constructor(){
    this.game=new Game();
    this.sf=new storagefunctions();
}
checkbonus(){
    //console.log("check bonus")
    this.game.b1=this.sf.getb1()        // get matrix b1
    //console.log(this.game.list)     
    this.list1=this.game.list.slice(1,-1)
    //console.log(this.list1)
    for(let i of this.list1){
        for(let j of this.list1){
            this.pr=i-1;
            this.nr=i+1;
            this.pc=j-1;
            this.nc=j+1;
            //upper left square
            if (this.game.b1[i][j] == this.game.b1[this.pr][this.pc] && this.game.b1[this.pr][j]==this.game.b1[i][this.pc] && 
                this.game.b1[i][j]==this.game.b1[this.pr][j]){
                   this.game.b1= this.assignbonusul(this.game.b1,i,j);
                   //this.sf.setb1(this.game.b1)
                }
            //upper right square
            if(this.game.b1[i][j]==this.game.b1[this.nr][this.pc] && this.game.b1[this.pr][j]==this.game.b1[i][this.nc] &&
                this.game.b1[i][j]==this.game.b1[i][this.nc]){
                   this.game.b1= this.assignbonusur(this.game.b1,i,j);
                   //this.sf.setb1(this.game.b1)
                }
            //lower left square
            if(this.game.b1[i][j]==this.game.b1[this.nr][this.pc] && this.game.b1[i][this.pc]==this.game.b1[this.nr][j] &&
                this.game.b1[i][j]== this.game.b1[i][this.pc]){
                   this.game.b1=this.assignbonusll(this.game.b1,i,j);
                   //this.sf.setb1(this.game.b1)
                }
            //lower right square
            if(this.game.b1[i][j]==this.game.b1[this.nr][this.nc] && this.game.b1[i][this.nc]==this.game.b1[this.nr][j] &&
                this.game.b1[i][j]==this.game.b1[i][this.nc]){
                  this.game.b1=  this.assignbonuslr(this.game.b1,i,j);
                  //this.sf.setb1(this.game.b1)
                }
        }
    }
this.sf.setb1(this.game.b1);
}
//upper left assign bonus function
assignbonusul(mat,i,j){
    //console.log("assignbonusul")
    this.v=this.checkvalue(mat,i,j)
    //this.game.b1=this.sf.getb1()
        mat[i][j]=this.v;
        mat[this.pr][this.pc]=this.v;
        mat[this.pr][j]=this.v;
        mat[i][this.pc]=this.v;
        return mat
}
//upper right assign bonus function
assignbonusur(mat,i,j){
    this.v=this.checkvalue(mat,i,j);
    
        mat[i][j]=this.v;
        mat[i][this.nc]=this.v;
        mat[this.pr][this.nc]=this.v;
        mat[this.pr][j]=this.v;
        return mat
}
assignbonuslr(mat,i,j){
    this.v=this.checkvalue(mat,i,j);
    //this.game.b1=this.sf.getb1()
        mat[i][j]=this.v;
        mat[i][this.nc]=this.v;
        mat[this.nr][this.nc]=this.v;
        mat[this.nr][j]=this.v;
        return mat
}
assignbonusll(mat,i,j){
    this.v=this.checkvalue(mat,i,j);
    //this.game.b1=this.sf.getb1()
        mat[i][j]=this.v;
        mat[i][this.pc]=this.v;
        mat[this.nr][this.pc]=this.v;
        mat[this.nr][j]=this.v;
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