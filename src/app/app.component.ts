import { Component } from "@angular/core";


@Component({
    selector:'app-root',
    /*template:`This is my first hand-written component...
    <br>This is my second line in my html
    `,*/
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css','./app.component2.css']
})
export class AppComponent{

    //defining a variable
    //variableName:dataType=value;
    applicationName:string='DemoApp';

}