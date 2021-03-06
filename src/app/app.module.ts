import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptRouterModule} from  "nativescript-angular/router"

import {guidecomponent} from "./guide/guide.component";


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { gamecomponent } from "./game/game.component";
import { logincomponent } from "./login/login.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
    
        
    ],
    declarations: [
        AppComponent,gamecomponent,logincomponent,guidecomponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
