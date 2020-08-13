import { getNumber,setNumber} from "tns-core-modules/application-settings";


export class Game{
    xscore:number=0;          // Red score 
    yscore:number=0;          //Blue score
    b1:Array<Array<number>>; //main matrix
    b2:Array<Array<number>>; //score matrix
   // b3:Array<Array<number>>; //dummy matrix
    rowInput:number=5;        // row number
    colsInput:number=5;       // column number
    tapcount:number=0;        //tap count to switch between users
    colour:Array<string>=['gray','#FF7E00','#35f9f9',"#FF1940", "#355bf9" ]; /**gray,red,blue,highlighted red,high blue */   // Array of colour code to fill the box in matrix
    list:Array<number>=Array.from(Array(this.rowInput).keys());     //array of index to loop till row and column
    redbonus:number=0;
    bluebonus:number=0;
    redtotal:number=0 ;
    bluetotal:number=0;
    turn:string="Red turn to unlock treasure";
}

export class storagefunctions{  
    game:Game;  
 constructor(){
     this.game=new Game;
 }
//set bonus value for red and blue
setredbonus(data){
    setNumber("redbonus",data)
}
setbluebonus(data){
    setNumber("bluebonus",data)
}
//get bonus value for red and blue
getredbonus(){
    return(getNumber('redbonus'))
}
getbluebonus(){
    return(getNumber('bluebonus'))
}
// setb1 and get b1
setb1(data){
    this.game.list=this.getlist()
    for(let i of this.game.list){
        for(let j of this.game.list){
            setNumber(String("b1").concat(String(i)).concat(String(j)),data[i][j])   }
        }

    }

getb1(){
    let a:Array<Array<number>>=Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput).fill(0));
    this.game.list=this.getlist();
    for(let i of this.game.list){
        for(let j of this.game.list){
            a[i][j]=getNumber(String("b1").concat(String(i)).concat(String(j))) }
        }
    return a
}
 getlist(){
    return this.game.list
}
setxscore(data){
    setNumber("xscore",(data))
    //console.log("Xscore set successfully")
}
getxscore(){
    return (getNumber("xscore"))
}
setyscore(data){
    setNumber("yscore",data)
   // console.log("yscore set successfully")
}
getyscore(){
    return (getNumber("yscore"))
}

//using session storage for tap count
settapcount(data){
    setNumber("tapcount",data)
}
gettapcount(){
   return(getNumber( 'tapcount'));
}
setb2(data){
        this.game.list=this.getlist()
        for(let i of this.game.list){
            for(let j of this.game.list){
                setNumber(String("b2").concat(String(i)).concat(String(j)),Number(data[i][j])  )
            }
        }
   // console.log("B2 Set successfully")
    }
getb2(){
    let a=Array.from(Array(this.game.rowInput), _ => Array(this.game.colsInput));
        for(let i of this.game.list){
            for(let j of this.game.list){
                a[i][j]=getNumber(String("b2").concat(String(i)).concat(String(j)))
            }
        }
        return a
    }
}