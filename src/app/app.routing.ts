import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {logincomponent} from  "./login/login.component"
import { gamecomponent } from "./game/game.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full"},
    {path:"login",component:logincomponent},
    {path: "game", component: gamecomponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }