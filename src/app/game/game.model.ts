import { SecureStorage } from "nativescript-secure-storage";

let secureStorage = new SecureStorage();
export class Game{
    xscore:number;          // Red score 
    yscore:number;          //Blue score
    b1:Array<Array<number>>; //main matrix
    b2:Array<Array<number>>; //score matrix
    b3:Array<Array<number>>; //dummy matrix
    rowInput:number=5;        // row number
    colsInput:number=5;       // column number
    tapcount:number;        //tap count to switch between users
    colour:Array<string>=['gray','#e74c3c','#35f9f9',"#ff0000", "#355bf9" ]; /**gray,red,blue,highlighted red,high blue */   // Array of colour code to fill the box in matrix
    list:Array<number>=Array.from(Array(this.rowInput).keys());     //array of index to loop till row and column
}

export class storagefunctions{  
    game:Game;  
 constructor(){
     this.game=new Game;
 }
setb1(data){
    this.game.list=this.getlist()
    for(let i of this.game.list){
        for(let j of this.game.list){
            secureStorage.setSync({
                key: String("b1").concat(String(i)).concat(String(j)),
                value:  String(data[i][j])   })
        }
    }
console.log(data)
}
getb1(){
    let a:Array<Array<number>>=Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));  
    this.game.list=this.getlist()
    for(let i of this.game.list){
        for(let j of this.game.list){
            a[i][j]=Number(secureStorage.getSync({
                key: String("b1").concat(String(i)).concat(String(j)) }))
        }
    }
    return a
}
 getlist(){
    return this.game.list
}
setxscore(data){
    secureStorage.setSync({
        key: String("xscore"),
        value:  String(data)})
    console.log("Xscore set successfully")
}
getxscore(){
    return (Number(secureStorage.getSync({
        key: String("xscore")})))
}
setyscore(data){
    secureStorage.setSync({
        key: String("yscore"),
        value:  String(data)})
    console.log("yscore set successfully")
}
getyscore(){
    return (Number(secureStorage.getSync({
        key: String("yscore")})))
}
settapcount(data){
    secureStorage.setSync({
        key: String("tapcount"),
        value:  String(data)})
        console.log("Tap count set successfully")
    }
geettapcount(){
    return (Number(secureStorage.getSync({
        key: String("tapcount")})))
    }
setb2(data){
        this.game.list=this.getlist()
        for(let i of this.game.list){
            for(let j of this.game.list){
                secureStorage.setSync({
                    key: String("b2").concat(String(i)).concat(String(j)),
                    value:  String(data[i][j])   })
            }
        }
    console.log("B2 Set successfully")
    }
getb2(){
        for(let i of this.game.list){
            for(let j of this.game.list){
                this.game.b2[i][j]=(Number(secureStorage.getSync({
                    key: String("b2").concat(String(i)).concat(String(j)) })))
            }
        }
        return this.game.b2
    }


}