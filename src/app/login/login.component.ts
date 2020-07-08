import { Component, OnInit} from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls: ["./login.component.css"],

})
export class logincomponent implements OnInit {
    constructor(private page: Page) {}
    ngOnInit() {
        this.page.actionBarHidden = true;
      }
    
}