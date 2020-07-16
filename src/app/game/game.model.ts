import { SecureStorage } from "nativescript-secure-storage";

let secureStorage = new SecureStorage();
export class Game{
    xscore:number;          // Red score 
    yscore:number;          //Blue score
    b1:Array<Array<number>>; //main matrix
    b2:Array<Array<number>>; //score matrix
    b3:Array<Array<number>>; //dummy matrix
    rowInput:number;        // row number
    colsInput:number;       // column number
    tapcount:number;        //tap count to switch between users
    colour:Array<string>;   // Array of colour code to fill the box in matrix
    list:Array<number>;     //array of index to loop till row and column
}

export class storagefunctions{  
    game:Game;  
    storageintialize(){
        secureStorage.removeAll();
        this.game.rowInput=5;
        this.game.colsInput=5;
        this.game=new Game();
        /** Initialize value to the matrix */
        this.game.b1 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));
        /** Initialize value to score */
        this.game.xscore=0;
        this.game.yscore=0;
        /** Initialize touch count  */
        this.game.tapcount=0
        /** Initialize colour for square */
        this.game.colour=['gray','#e74c3c','#35f9f9',"#ff0000", "#355bf9" ] /**gray,red,blue,highlighted red,high blue */
        /** for list in looping */
        this.game.list=Array.from(Array(this.game.rowInput).keys()) //fills the array with index 
        /** score matrix */
        this.game.b2 = Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput));
}
setb1(data){
    for(let i of this.game.list){
        for(let j of this.game.list){
            secureStorage.setSync({
                key: String("b1").concat(String(i)).concat(String(j)),
                value:  String(data[i][j])   })
        }
    }
console.log("B1 Set successfully")
}
getb1(){
    for(let i of this.game.list){
        for(let j of this.game.list){
            this.game.b1[i][j]=(Number(secureStorage.getSync({
                key: String("b1").concat(String(i)).concat(String(j)) })))
        }
    }
    return this.game.b1
}
 getlist(){
    return Array.from(Array(this.game.rowInput).keys())
}
}