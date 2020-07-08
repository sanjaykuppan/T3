import {Game} from "./game.model";
export class support{
game:Game;
public list1:Array<number>;
public pr:number;
public nr:number;
public pc:number;
public nc:number;
public v:number;
checkbonus(){
    this.list1=this.game.list.slice(1,-1)
    for(let i of this.list1){
        for(let j of this.list1){
            this.pr=i-1;
            this.nr=i+1;
            this.pc=j-1;
            this.nc=j+1;
            //upper left square
            if (this.game.b1[i][j] == this.game.b1[this.pr][this.pc] && this.game.b1[this.pr][j]==this.game.b1[i][this.pc] && 
                this.game.b1[i][j]==this.game.b1[this.pr][j]){
                    this.assignbonusul(i,j);
                }
            //upper right square
            if(this.game.b1[i][j]==this.game.b1[this.nr][this.pc] && this.game.b1[this.pr][j]==this.game.b1[i][this.nc] &&
                this.game.b1[i][j]==this.game.b1[i][this.nc]){
                    this.assignbonusur(i,j);
                }
            //lower left square
            if(this.game.b1[i][j]==this.game.b1[this.nr][this.pc] && this.game.b1[i][this.pc]==this.game.b1[this.nr][j] &&
                this.game.b1[i][j]== this.game.b1[i][this.pc]){
                    this.assignbonusll(i,j);
                }
            //lower right square
            if(this.game.b1[i][j]==this.game.b1[this.nr][this.nc] && this.game.b1[i][this.nc]==this.game.b1[this.nr][j] &&
                this.game.b1[i][j]==this.game.b1[i][this.nc]){
                    this.assignbonuslr(i,j);
                }
        }
    }

}
//upper left assign bonus function
assignbonusul(i,j){
    this.v=this.checkvalue(i,j)
        this.game.b1[i][j]=this.v;
        this.game.b1[this.pr][this.pc]=this.v;
        this.game.b1[this.pr][j]=this.v;
        this.game.b1[i][this.pc]=this.v;
}
//upper right assign bonus function
assignbonusur(i,j){
    this.v=this.checkvalue(i,j);
        this.game.b1[i][j]=this.v;
        this.game.b1[i][this.nc]=this.v;
        this.game.b1[this.pr][this.nc]=this.v;
        this.game.b1[this.pr][j]=this.v;
}
assignbonuslr(i,j){
    this.v=this.checkvalue(i,j);
        this.game.b1[i][j]=this.v;
        this.game.b1[i][this.nc]=this.v;
        this.game.b1[this.nr][this.nc]=this.v;
        this.game.b1[this.nr][j]=this.v;
}
assignbonusll(i,j){
    this.v=this.checkvalue(i,j);
        this.game.b1[i][j]=this.v;
        this.game.b1[i][this.pc]=this.v;
        this.game.b1[this.nr][this.pc]=this.v;
        this.game.b1[this.nr][j]=this.v;
}
//function to assign colour value 
checkvalue(i,j){
    this.v=this.game.b1[i][j]
    if(this.game.b1[i][j]==1){
        this.v=3;
    }
    if(this.game.b1[i][j]==2){
        this.v=4;
    }
    return this.v;
}
}