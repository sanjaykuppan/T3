import { Component } from "@angular/core";
import { Router } from "@angular/router"; 

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent { 
    constructor (private router: Router){}
    playgame(){
        this.router.navigate(['/game'])
    }
}
