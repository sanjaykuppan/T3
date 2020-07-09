import {Game} from "./game.model";



export class Support{

public list1:Array<number>;
public pr:number;
public nr:number;
public pc:number;
public nc:number;
public v:number;
checkbonus(game:Game){

    this.list1=game.list.slice(1,-1)
    for(let i of this.list1){
        for(let j of this.list1){
            this.pr=i-1;
            this.nr=i+1;
            this.pc=j-1;
            this.nc=j+1;
            //upper left square
            if (game.b1[i][j] == game.b1[this.pr][this.pc] && game.b1[this.pr][j]==game.b1[i][this.pc] && 
                game.b1[i][j]==game.b1[this.pr][j]){
                   game= this.assignbonusul(game,i,j);
                }
            //upper right square
            if(game.b1[i][j]==game.b1[this.nr][this.pc] && game.b1[this.pr][j]==game.b1[i][this.nc] &&
                game.b1[i][j]==game.b1[i][this.nc]){
                   game= this.assignbonusur(game,i,j);
                }
            //lower left square
            if(game.b1[i][j]==game.b1[this.nr][this.pc] && game.b1[i][this.pc]==game.b1[this.nr][j] &&
                game.b1[i][j]== game.b1[i][this.pc]){
                   game=this.assignbonusll(game,i,j);
                }
            //lower right square
            if(game.b1[i][j]==game.b1[this.nr][this.nc] && game.b1[i][this.nc]==game.b1[this.nr][j] &&
                game.b1[i][j]==game.b1[i][this.nc]){
                  game=  this.assignbonuslr(game,i,j);
                }
        }
    }
return game
}
//upper left assign bonus function
assignbonusul(game:Game,i,j){
    this.v=this.checkvalue(game,i,j)
        game.b1[i][j]=this.v;
        game.b1[this.pr][this.pc]=this.v;
        game.b1[this.pr][j]=this.v;
        game.b1[i][this.pc]=this.v;
        return game;
}
//upper right assign bonus function
assignbonusur(game:Game,i,j){
    this.v=this.checkvalue(game,i,j);
        game.b1[i][j]=this.v;
        game.b1[i][this.nc]=this.v;
        game.b1[this.pr][this.nc]=this.v;
        game.b1[this.pr][j]=this.v;
        return game;
}
assignbonuslr(game:Game,i,j){
    this.v=this.checkvalue(game,i,j);
        game.b1[i][j]=this.v;
        game.b1[i][this.nc]=this.v;
        game.b1[this.nr][this.nc]=this.v;
        game.b1[this.nr][j]=this.v;
        return game;
}
assignbonusll(game:Game,i,j){
    this.v=this.checkvalue(game,i,j);
        game.b1[i][j]=this.v;
        game.b1[i][this.pc]=this.v;
        game.b1[this.nr][this.pc]=this.v;
        game.b1[this.nr][j]=this.v;
        return game;
}
//function to assign colour value 
checkvalue(game:Game,i,j){
    this.v=game.b1[i][j]
    if(game.b1[i][j]==1){
        this.v=3;
    }
    if(game.b1[i][j]==2){
        this.v=4;
    }
    return this.v;
}
}