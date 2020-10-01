import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";

@Component({
  
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class guidecomponent implements OnInit {
  constructor(private page: Page) {}

  ngOnInit(): void {
    //this.page.actionBarHidden = true;
  }
}